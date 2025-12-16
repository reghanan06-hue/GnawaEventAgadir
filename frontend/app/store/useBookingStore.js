
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

// import create from "zustand";

// export type ImageStore = {
//   images: string[];
//   setImages: (imgs: string[]) => void;
// };

// // Ici on utilise le type ImageStore pour typer le store
// export const useImageStore = create<ImageStore>((set) => ({
//   images: [],
//   setImages: (imgs) => set({ images: imgs }),
// }));

