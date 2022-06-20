import { UseQueryOptions } from 'react-query';

const reactQueryConfig: Omit<UseQueryOptions, 'queryKey' | 'queryFn'> = {
  cacheTime: 1000 * 60 * 12,
  staleTime: 1000 * 60 * 12,
  refetchOnWindowFocus: false,
};

export default reactQueryConfig;
