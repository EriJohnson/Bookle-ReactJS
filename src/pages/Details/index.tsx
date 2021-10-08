import { Box, Container, Flex, Stack, VStack } from '@chakra-ui/react';
import { Heading, Image, Spinner, Text } from '@chakra-ui/react';

import useFetchBookDetails from '../../hooks/useFetchBookDetails';
import { useParams } from 'react-router';

function Details() {
  const { id } = useParams<{ id?: string }>();
  const { book, isLoading } = useFetchBookDetails(id);

  return (
    <Container maxWidth="container.lg" p={8}>
      {isLoading && (
        <Flex h="100vh" direction="column" align="center">
          <Spinner size="xl" color="sand.600" m="auto" />
        </Flex>
      )}

      {!isLoading && (
        <Stack direction={['column', 'column', 'row']} spacing={8}>
          <Box flex={1} p={[4, 0]}>
            <Image
              objectFit="cover"
              w="100%"
              src={book?.volumeInfo?.imageLinks?.thumbnail}
            />
          </Box>

          <Box flex={2.5}>
            <VStack align="flex-start" spacing={8}>
              <VStack align="flex-start">
                <Heading>{book?.volumeInfo.title}</Heading>

                <Heading size="sm" color="gray.600">
                  {book?.volumeInfo?.authors?.[0]} ·{' '}
                  {book?.volumeInfo?.publishedDate}
                </Heading>
              </VStack>

              <Text textAlign="justify">{book?.volumeInfo?.description}</Text>
            </VStack>
          </Box>
        </Stack>
      )}
    </Container>
  );
}

export default Details;
