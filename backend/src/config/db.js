const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: Number(process.env.DB_PORT), 
    logging: false, 
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connecté avec succès !");
  } catch (error) {
    console.error("❌ Erreur connexion DB :", error.message);
  }
}

module.exports = { sequelize, connectDB };
