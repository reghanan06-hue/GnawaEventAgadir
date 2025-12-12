
// import { useQuery } from "@tanstack/react-query";
// import { instance } from "../instance";
// export const useGetEvents = () => {
//   return useQuery({
//     queryKey: ['events'],
//     queryFn: () => instance.get('/event').then(res => res.data).catch((error) => {
//       throw new Error(error.message || 'Failed to fetch event data');
//     }),
//   });
// }

import { useQuery } from "@tanstack/react-query";
import { instance } from "../instance";

// GET all event
export const useGetEvents = () => {
  return useQuery({
    queryKey: ["event"],
    queryFn: async () => {  
      try {
        const res = await instance.get("/event");
        return res.data;
      } catch (error) {
        throw new Error(error.message || "Failed to fetch event data");
      }
    },
  });
};

export const useGetEventsById = (id) => {
  return useQuery({
    queryKey: ["event", id],
    enabled: !!id,
    queryFn: async () => {
      try {
        const res = await instance.get(`/event/${id}`);
        return res.data;
      } catch (error) {
        throw new Error(error.message || "Failed to fetch event details");
      }
    },
  });
};
