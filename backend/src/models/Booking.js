import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import EventInfo from "./EventInfo.js";   

const Booking = sequelize.define(
  "Booking",
  {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true 
    },
    event_id: {                    
      type: DataTypes.INTEGER,
      allowNull: false,           
      references: {               
        model: EventInfo,
        key: "id",
      },
      onDelete: "CASCADE",       
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre_person: { 
      type: DataTypes.INTEGER 
    },
    prix: { 
      type: DataTypes.INTEGER 
    },
  },
  {
    tableName: "bookings",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);

EventInfo.hasMany(Booking, { foreignKey: "event_id", as: "bookings" });
Booking.belongsTo(EventInfo, { foreignKey: "event_id", as: "event" });

export default Booking;
