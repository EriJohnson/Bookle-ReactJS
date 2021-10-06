import { useEffect, useState } from 'react';

import IBook from '../../types/Book';
import SearchService from '../../services/SearchService';

function useFetchBookDetails(id: string) {
  const [book, setBook] = useState<IBook | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (id) {
        try {
          const response = await SearchService.show(id);

          if (response) setBook(response);

          console.log(`response`, response);
        } catch (error) {
          console.log(`error`, error);
        } finally {
          setIsLoading(false);
        }
      }
    })();
  }, [book, id, isLoading]);

  return { book, isLoading };
}

export default useFetchBookDetails;
