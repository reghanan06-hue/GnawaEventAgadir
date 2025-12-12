import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import artistRoutes from "./routes/artistRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
// GET /api/artists - Liste tous les artistes
app.use("/artist", artistRoutes);


// GET /api/artists/:id - Détails d'un artiste

const PORT = process.env.PORT || 4000;


 
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(` Server running on port ${PORT}`);
    });
});