import { useQuery } from '@tanstack/react-query';
import axios from './utils/axios';
import { LaunchResponse } from '@/types/launches';

const LAUCHES = 'launches/query';
const pageLimit = 10;

export const useQueryLaunches = ({ page = 1 }: { page?: number } = {}) => {
  return useQuery({
    queryKey: ['launches'],
    queryFn: async () => {
      const { data } = await axios.post<LaunchResponse>(`${LAUCHES}`, {
        query: {
          limit: pageLimit,
        },
        options: {
          populate: ['payloads', 'launchpad'],
          page: page,
        },
      });
      return data;
    },
  });
};
