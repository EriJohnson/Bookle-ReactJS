import { useEffect, useState } from 'react';

import IBook from '../types/Book';
import SearchService from '../services/SearchService';

const MAX_RESULTS = 10;

function useFetchBooks(query: string, currentPage: number) {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState<IBook[]>([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    (async () => {
      if (query) {
        try {
          const response = await SearchService.index(query, currentPage);

          if (response) {
            setBooks(response.items);
            setPageCount(response.totalItems / MAX_RESULTS);
          }
        } catch (error) {
          console.log(`error`, error);
        } finally {
          setIsLoading(false);
        }
      }
    })();
  }, [currentPage, query]);

  return { books, isLoading, setIsLoading, pageCount };
}

export default useFetchBooks;
