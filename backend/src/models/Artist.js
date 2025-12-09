import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Artist = sequelize.define("Artist", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

      firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },

  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },

  photo_url: {
    type: DataTypes.STRING,
    allowNull: false
  },

  status: {
    type: DataTypes.ENUM("gnawa", "gnawa fashion"),
    defaultValue: "gnawa"
  }
},
{
  tableName: "artists",
  timestamps: true,           // createdAt + updatedAt automatiques
  createdAt: "created_at",
  updatedAt: "updated_at"
});

export default Artist;
