import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Artist from "./Artist.js";

const EventInfo = sequelize.define(
  "EventInfo",
  {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    artist_id: {                     
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Artist,
        key: "id",
      },
      onDelete: "CASCADE",
    },

    scene_spectacle: {     
      type: DataTypes.STRING,
      allowNull: false,
    },

    date_concert: {        
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    heure_debut: {        
      type: DataTypes.TIME,
    },

    heure_fin: {           
      type: DataTypes.TIME,
    },
  },

  {
    tableName: "eventInfos",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Artist.hasMany(EventInfo, { foreignKey: "artist_id" });
EventInfo.belongsTo(Artist, { foreignKey: "artist_id" });

export default EventInfo;
