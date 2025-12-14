
import { useQuery } from "@tanstack/react-query";
import { instance } from "../instance";

// GET all artists
export const useGetBooking= () => {
  return useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      try {
        const res = await instance.get("/booking");
        return res.data;
      } catch (error) {
        throw new Error(error.message || "Failed to fetch booking data");
      }
    },
  });
};

export const useGetBookingId = (id) => {
  return useQuery({
    queryKey: ["booking", id],
    enabled: !!id, // évite de lancer la requete si pas id
    queryFn: async () => {
      try {
        const res = await instance.get(`/booking/${id}`);
        return res.data;
      } catch (error) {
        throw new Error(error.message || "Failed to fetch booking details");
      }
    },
  });
};
