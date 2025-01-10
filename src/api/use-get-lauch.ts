import { useQuery } from '@tanstack/react-query';
import axios from './utils/axios';
import { Launch } from '@/types/launches';

const LAUCHES = 'launches/';

export const useGetLaunch = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ['launches'],
    queryFn: async () => {
      const { data } = await axios.get<Launch>(`${LAUCHES}${id}`);
      return data;
    },
  });
};
