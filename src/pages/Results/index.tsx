import { Box, Container, Flex, HStack, VStack } from '@chakra-ui/react';
import { Button, Heading, Image, List, ListItem, Text } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import { Skeleton, SkeletonText } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Paginate from '../../components/Paginate';
import useFetchBooks from '../../hooks/useFetchBooks';
import useQuery from '../../hooks/useQuery';

const scrollToTop = () => window.scrollTo(0, 0);

function Results() {
  const [currentPage, setCurrentPage] = useState(1);

  const query = useQuery('q');
  const page = useQuery('page');

  const history = useHistory();

  const { books, isLoading, setIsLoading, pageCount } = useFetchBooks(
    query,
    page
  );

  useEffect(() => {
    if (Number(page) < 0) return;

    setCurrentPage(Number(page) - 1);
  }, [page]);

  function handlePageChange({ selected }) {
    setIsLoading(true);

    scrollToTop();

    history.push(`/books?q=${query}&page=${selected + 1}`);
  }

  function redirectToDetailsPage(bookId: string) {
    history.push(`/books/${bookId}`);
  }

  return (
    <Container maxWidth="container.md">
      <Flex h="100vh" direction="column" align="center">
        <List width="full" spacing={10} py={16}>
          {books?.map(book => (
            <ListItem key={book.id}>
              <HStack align="flex-start" spacing={4}>
                {book?.volumeInfo?.imageLinks?.thumbnail && (
                  <Box flex={1}>
                    <Skeleton isLoaded={!isLoading}>
                      <Image
                        objectFit="cover"
                        w="100%"
                        maxH="256px"
                        src={book?.volumeInfo?.imageLinks?.thumbnail}
                        cursor="pointer"
                        onClick={() => redirectToDetailsPage(book.id)}
                      />
                    </Skeleton>
                  </Box>
                )}

                <Box flex={4}>
                  <VStack align="flex-start" spacing={4}>
                    <VStack align="flex-start">
                      <Skeleton isLoaded={!isLoading}>
                        <Link to={`/books/${book.id}`}>
                          <Heading size="md">{book?.volumeInfo?.title}</Heading>
                        </Link>
                      </Skeleton>

                      <Heading size="sm" color="gray.600">
                        <SkeletonText noOfLines={2} isLoaded={!isLoading}>
                          {book?.volumeInfo?.authors?.[0]} ??{' '}
                          {book?.volumeInfo?.publishedDate}
                        </SkeletonText>
                      </Heading>
                    </VStack>

                    <VStack align="flex-start" spacing={4}>
                      <SkeletonText noOfLines={[2, 3]} isLoaded={!isLoading}>
                        {book?.volumeInfo?.description && (
                          <Text noOfLines={[2, 3]}>
                            {book?.volumeInfo?.description}
                          </Text>
                        )}
                      </SkeletonText>

                      <Skeleton isLoaded={!isLoading}>
                        <Button
                          onClick={() => redirectToDetailsPage(book.id)}
                          colorScheme="sand"
                          borderRadius="full"
                          variant="outline"
                          size="sm"
                        >
                          Visualizar
                        </Button>
                      </Skeleton>
                    </VStack>
                  </VStack>
                </Box>
              </HStack>
            </ListItem>
          ))}

          {!isLoading && (
            <Paginate
              pageCount={pageCount}
              onPageChange={handlePageChange}
              initialPage={currentPage}
            />
          )}
        </List>
      </Flex>
    </Container>
  );
}

export default Results;
