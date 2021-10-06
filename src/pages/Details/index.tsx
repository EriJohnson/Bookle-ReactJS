import { Container, Flex, Heading, Spinner } from '@chakra-ui/react';

import useFetchBookDetails from './useFetchBookDetails';
import { useParams } from 'react-router';

function Details() {
  const { id } = useParams<{ id?: string }>();
  const { book, isLoading } = useFetchBookDetails(id);

  return (
    <Container maxWidth="container.md" pt={16}>
      <Flex h="100vh" direction="column" align="center">
        {isLoading && <Spinner size="xl" color="sand.600" m="auto" />}

        {!isLoading && <Heading>{book?.volumeInfo.title}</Heading>}
      </Flex>
    </Container>
  );
}

export default Details;
