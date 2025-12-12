
import { useQuery } from "@tanstack/react-query";
import { instance } from "../instance";
export const useGetEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: () => instance.get('/event').then(res => res.data).catch((error) => {
      throw new Error(error.message || 'Failed to fetch event data');
    }),
  });
}