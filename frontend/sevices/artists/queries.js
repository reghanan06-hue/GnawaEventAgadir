
import { useQuery } from "@tanstack/react-query";
import { instance } from "../instance";

// GET all artists
export const useGetArtist = () => {
  return useQuery({
    queryKey: ["artists"],
    queryFn: async () => {
      try {
        const res = await instance.get("/artist");
        return res.data;
      } catch (error) {
        throw new Error(error.message || "Failed to fetch artist data");
      }
    },
  });
};

export const useGetArtistById = (id) => {
  return useQuery({
    queryKey: ["artist", id],
    enabled: !!id, // évite de lancer la requete si pas id
    queryFn: async () => {
      try {
        const res = await instance.get(`/artist/${id}`);
        return res.data;
      } catch (error) {
        throw new Error(error.message || "Failed to fetch artist details");
      }
    },
  });
};
