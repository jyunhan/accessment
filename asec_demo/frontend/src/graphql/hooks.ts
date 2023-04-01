import { useQuery } from '@apollo/client';
import { PAGE_COUNT_QUERY } from './queries';

export function usePageCount() {
  const { data, loading, error } = useQuery(PAGE_COUNT_QUERY, {});
  return {
    pages: data?.countPage,
    loading,
    error: Boolean(error),
  };
}
