// import { create } from "zustand";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const STORAGE_KEY = "@reservations";

// export const useBookingStore = create((set, get) => ({
//   bookings: [],

//   loadBookings: async () => {
//     try {
//       const stored = await AsyncStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         set({ bookings: JSON.parse(stored) });
//       }
//     } catch (e) {
//       console.log("loadBookings error:", e);
//     }
//   },

//   addBooking: async (booking) => {
//     const updated = [...get().bookings, booking];

//     // 🔥 1. update UI immediately
//     set({ bookings: updated });

//     // 🔥 2. persist after
//     try {
//       await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//     } catch (e) {
//       console.log("addBooking error:", e);
//     }
//   },

//   clearBookings: async () => {
//     set({ bookings: [] });

//     try {
//       await AsyncStorage.removeItem(STORAGE_KEY);
//     } catch (e) {
//       console.log("clearBookings error:", e);
//     }
//   },
// }));
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "bookings";

export const useBookingStore = create((set) => ({
  bookings: [],

  loadBookings: async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data) {
      set({ bookings: JSON.parse(data) });
    }
  },

  addBooking: async (booking) => {
    set((state) => {
      const updated = [...state.bookings, booking];
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return { bookings: updated };
    });
  },

  clearBookings: async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    set({ bookings: [] });
  },
}));
