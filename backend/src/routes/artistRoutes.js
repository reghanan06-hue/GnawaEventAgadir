
import express from "express";
import {
  createArtist,
  getArtists,
  getArtistById,
  // updateArtist,
  // deleteArtist
} from "../controllers/artistController.js";

const router = express.Router();

router.post("/", createArtist);        // Create
router.get("/", getArtists);           // Read all
router.get("/:id", getArtistById);     // Read one
// router.put("/:id", updateArtist);      // Update
// router.delete("/:id", deleteArtist);   // Delete

export default router;
