// import { useQuery } from "@tanstack/react-query";
// import { instance } from "../instance";
// export const useGetArtist = () => {
//   return useQuery({
//     queryKey: ['artists'],
//     queryFn: () => instance.get('/artist').then(res => res.data).catch((error) => {
//       throw new Error(error.message || 'Failed to fetch artist data');
//     }),
//   });
// }

// // import { useQuery } from "@tanstack/react-query";
// // import axios from "axios";

// export const useGetArtistById = (id: string) => {
//   return useQuery(["artist", id], async () => {
//     const res = await axios.get(`http://ton-api-url/artists/${id}`);
//     return res.data;
//   });
// };

import { useQuery } from "@tanstack/react-query";
import { instance } from "../instance";

// ➤ GET all artists
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

// ➤ GET artist by ID
export const useGetArtistById = (id) => {
  return useQuery({
    queryKey: ["artist", id],
    enabled: !!id, // évite de lancer la requête si pas d'id
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
