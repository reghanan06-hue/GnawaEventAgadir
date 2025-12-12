
import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  // updateArtist,
  // deleteArtist
} from "../controllers/eventController.js";

const router = express.Router();

router.post("/", createEvent);        // Create
router.get("/", getAllEvents);           // Read all
router.get("/:id", getEventById);     // Read one
// router.put("/:id", updateArtist);      // Update
// router.delete("/:id", deleteArtist);   // Delete


export default router;
