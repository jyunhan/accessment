import { useMutation, useQuery } from '@apollo/client';
import { PEOPLE_QUERY, PAGE_COUNT_QUERY } from './queries';

export function usePeople(page: number) {
  const { data, loading, error } = useQuery(PEOPLE_QUERY, {
    variables: { page },
  });
  return {
    people: data?.people,
    loading,
    error: Boolean(error),
  };
}

export function usePageCount() {
  const { data, loading, error } = useQuery(PAGE_COUNT_QUERY, {});
  return {
    pages: data?.countPage,
    loading,
    error: Boolean(error),
  };
}
