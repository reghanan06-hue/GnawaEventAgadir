import Booking from "../models/Booking.js";
import EventInfo from "../models/EventInfo.js";

// ➤ Create Booking
// export const createBooking = async (req, res) => {
//   try {
//     const booking = await Booking.create(req.body);
//     res.status(201).json({ message: "Booking created", booking });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// ➤ Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: [{ model: EventInfo, as: "event" }],
    });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createBooking = async (req, res) => {
  try {
    const { event_id, firstname, lastname, nombre_person, prix } = req.body;

    // Validation
    if (!event_id || !firstname || !lastname || !nombre_person || !prix) {
      return res.status(400).json({
        error: "event_id, firstname, lastname, nombre_person et prix sont obligatoires"
      });
    }

    // Vérifier si la réservation existe déjà
    const existingBooking = await Booking.findOne({ where: { lastname } });
    if (existingBooking) {
      return res.status(409).json({ error: "Cette réservation existe déjà" });
    }

    // Création
    const newBooking = await Booking.create({
      event_id: Number(event_id),       // conversion en number
      firstname,
      lastname,
      nombre_person: Number(nombre_person),
      prix: Number(prix),
    });

    return res.status(201).json({
      message: "Réservation créée avec succès",
      booking: newBooking,
    });
  } catch (error) {
    console.error("Erreur création Booking:", error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

//=========================
// export const createBooking = async (req, res) => {
//   try {
//     const { event_Id, firstname, lastname, nombre_person , prix } = req.body;

//     if (!firstname || !lastname || !nombre_person || !prix ) {
//       return res.status(400).json({ error: "eventId, firstname, lastname, nombre_person ,prix sont obligatoires" });
//     }

//     const existingBoking = await Booking.findOne({ where: { lastname } });
//     if (existingBoking) {
//       return res.status(409).json({ error: "Cette resvation existe déjà" });
//     }

// const newBooking= await Booking.create({
//   event_Id,
//   firstname,
//   lastname,
//   nombre_person,
//   prix,
// });
//     return res.status(201).json({ message: "Reservation créée avec succès", Booking: newTask });
//   } catch (error) {
//     console.error("Erreur création Task:", error);
//     return res.status(500).json({ error: "Erreur serveur" });
//   }
// };

// ➤ Get one booking by ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: [{ model: EventInfo, as: "event" }],
    });

    if (!booking) return res.status(404).json({ message: "Booking not found" });

    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➤ Update booking
export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);

    if (!booking) return res.status(404).json({ message: "Booking not found" });

    await booking.update(req.body);

    res.json({ message: "Booking updated", booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➤ Delete booking
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);

    if (!booking) return res.status(404).json({ message: "Booking not found" });

    await booking.destroy();

    res.json({ message: "Booking deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
