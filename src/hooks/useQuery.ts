import { useLocation } from 'react-router-dom';

function useQuery(query: string) {
  const { search } = useLocation();

  const URLQuery = new URLSearchParams(search);

  return URLQuery.get(query);
}

export default useQuery;
