import {
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Paginate from '../../components/Paginate';
import SearchService from '../../services/SearchService';
import { useHistory } from 'react-router';
import useQuery from '../../hooks/useQuery';

function Results() {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const query = useQuery('q');
  const page = useQuery('page');

  const history = useHistory();

  useEffect(() => {
    (async () => {
      if (query) {
        try {
          const response = await SearchService.searchBooks(query, currentPage);

          if (response) {
            setBooks(response.items);
            setPageCount(response.totalItems / 10);
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
    setCurrentPage(Number(page) - 1);
  }, [page]);

  function handlePageChange({ selected }) {
    setIsLoading(true);

    history.push(`/results?q=${query}&page=${selected + 1}`);
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
                    />
                  )}

                  <VStack align="flex-start" spacing={4}>
                    <VStack align="flex-start">
                      <Link>
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
