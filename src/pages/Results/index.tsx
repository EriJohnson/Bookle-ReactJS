import {
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

import IBook from '../../types/Book';
import Paginate from '../../components/Paginate';
import SearchService from '../../services/SearchService';
import useQuery from '../../hooks/useQuery';

const MAX_RESULTS = 10;

function Results() {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState<IBook[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const query = useQuery('q');
  const page = useQuery('page');

  const history = useHistory();

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

  useEffect(() => {
    if (Number(page) < 0) return setCurrentPage(0);

    setCurrentPage(Number(page) - 1);
  }, [page]);

  function handlePageChange({ selected }) {
    setIsLoading(true);

    history.push(`/results?q=${query}&page=${selected + 1}`);
  }

  function redirectToDetailsPage(bookId) {
    history.push(`/results/${bookId}`);
  }

  return (
    <Container maxWidth="container.md">
      <Flex h="100vh" direction="column" align="center" as="form">
        {isLoading && <Spinner size="xl" color="sand.600" m="auto" />}

        {!isLoading && books?.length > 0 && (
          <List width="full" spacing={8} py={16}>
            {books?.map(book => (
              <ListItem key={book.id}>
                <HStack align="flex-start" spacing={4}>
                  {book?.volumeInfo?.imageLinks?.thumbnail && (
                    <Image
                      objectFit="cover"
                      src={book?.volumeInfo?.imageLinks?.thumbnail}
                      cursor="pointer"
                      onClick={() => redirectToDetailsPage(book.id)}
                    />
                  )}

                  <VStack align="flex-start" spacing={4}>
                    <VStack align="flex-start">
                      <Link to={`/results/${book.id}`}>
                        <Heading size="md">{book?.volumeInfo?.title}</Heading>
                      </Link>

                      <Heading size="sm" color="gray.600">
                        {book?.volumeInfo?.authors?.[0]} ·{' '}
                        {book?.volumeInfo?.publishedDate}
                      </Heading>
                    </VStack>

                    <VStack align="flex-start" spacing={4}>
                      <Text noOfLines={[2, 3]}>
                        {book?.volumeInfo?.description}
                      </Text>
                      <Button
                        onClick={() => redirectToDetailsPage(book.id)}
                        colorScheme="sand"
                        borderRadius="full"
                        variant="outline"
                        size="sm"
                      >
                        Visualizar
                      </Button>
                    </VStack>
                  </VStack>
                </HStack>
              </ListItem>
            ))}
            <Paginate
              pageCount={pageCount}
              onPageChange={handlePageChange}
              initialPage={currentPage}
            />
          </List>
        )}
      </Flex>
    </Container>
  );
}

export default Results;
