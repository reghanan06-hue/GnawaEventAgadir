import Booking from "../models/Booking.js";
import EventInfo from "../models/EventInfo.js";

// ➤ Create Booking
export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json({ message: "Booking created", booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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
