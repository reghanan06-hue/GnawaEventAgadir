import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

import Artist from "./Artist.js";
import EventInfo from "./EventInfo.js";   

const Booking = sequelize.define("Booking", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true 
  },
  

  artist_id: { 
    type: DataTypes.INTEGER,
    allowNull: false,           
    references: { model: Artist, key: "id" },
    onDelete: "CASCADE"
  },
  
  event_id: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: EventInfo, key: "id" },
    onDelete: "CASCADE"
  },

  performance_time: { 
    type: DataTypes.DATE,     
    allowNull: false 
  },

  description: { 
    type: DataTypes.TEXT 
  },

  status: { 
    type: DataTypes.ENUM("Gnawa", "Gnawa fashion"),  
    defaultValue: "Gnawa"
  },

  due_date: { 
    type: DataTypes.DATE 
  }
},
{
  tableName: "bookings",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at"
});




Artist.hasMany(Booking, { foreignKey: "artist_id" });
Booking.belongsTo(Artist, { foreignKey: "artist_id" });

EventInfo.hasMany(Booking, { foreignKey: "event_id" });
Booking.belongsTo(EventInfo, { foreignKey: "event_id" });

export default Booking;
