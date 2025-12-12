import EventInfo from "../models/EventInfo.js";
import Artist from "../models/Artist.js";

export const getAllEvents = async (req, res) => {
  try {
    const events = await EventInfo.findAll({
      include: {
        model: Artist,
        attributes: ["id", "firstname", "lastname"],
      },
      order: [["date_concert", "ASC"]],
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const event = await EventInfo.findByPk(req.params.id, {
      include: {
        model: Artist,
        attributes: ["id", "firstname", "lastname"],
      },
    });
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createEvent = async (req, res) => {
  try {
    const { artist_id, scene_spectacle, date_concert, heure_debut, heure_fin } = req.body;

    const newEvent = await EventInfo.create({
      artist_id,
      scene_spectacle,
      date_concert,
      heure_debut,
      heure_fin,
    });

    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const updateEvent = async (req, res) => {
//   try {
//     const event = await EventInfo.findByPk(req.params.id);
//     if (!event) return res.status(404).json({ error: "Event not found" });

//     await event.update(req.body);
//     res.json(event);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const deleteEvent = async (req, res) => {
//   try {
//     const event = await EventInfo.findByPk(req.params.id);
//     if (!event) return res.status(404).json({ error: "Event not found" });

//     await event.destroy();
//     res.json({ message: "Event deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
