import { Container, Flex, Heading, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import IBook from '../../types/Book';
import SearchService from '../../services/SearchService';
import { useParams } from 'react-router';

function Details() {
  const [book, setBook] = useState<IBook | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams<{ id?: string }>();

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
  }, [id]);

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
