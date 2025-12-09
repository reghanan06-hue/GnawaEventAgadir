
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Artist = sequelize.define("EventInfo", {
    id: { type: DataTypes.INTEGER,
         primaryKey: true,
          autoIncrement: true },

    firstname  : { type: DataTypes.STRING, 
        allowNull: false },

    lastname  : { type: DataTypes.STRING, 
        allowNull: false },

        photo_url : { type: DataTypes.STRING, 
        unique: true, 
        allowNull: false },
        
    created_at : { type: DataTypes.DATE,
         allowNull: false },
});

export default Artist;