import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useState } from 'react';

import { SearchIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router';

function Home() {
  const [search, setSearch] = useState('');

  const history = useHistory();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setSearch(value);
  }

  async function handleSubmit(event: FormEvent<HTMLDivElement>) {
    event.preventDefault();

    if (!search) return;

    redirectToResultsPage();
  }

  function redirectToResultsPage() {
    history.push(`/books?q=${search}&page=1`);
  }

  return (
    <Container maxWidth="container.xl">
      <Flex
        h="100vh"
        direction="column"
        align="center"
        as="form"
        onSubmit={event => handleSubmit(event)}
      >
        <Spacer />
        <Heading as="h1" fontSize={['4rem', '6rem']} isTruncated>
          Bookle
        </Heading>
        <InputGroup marginTop={8} maxWidth="xl" size="lg">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            placeholder="Pesquise por título, autor ou assunto."
            bgColor="white"
            borderRadius="full"
            size="lg"
            focusBorderColor="sand.300"
            value={search}
            onChange={handleChange}
          />
        </InputGroup>

        <Button
          marginTop={6}
          colorScheme="sand"
          color="white"
          width={['full', '3xs']}
          type="submit"
        >
          Pesquisa Bookle
        </Button>
        <Text marginTop={6} fontSize="sm" color="gray.500">
          Desenvolvido com 🖤 by{' '}
          <Link
            color="sand.600"
            href="https://www.linkedin.com/in/erijsfernandes/"
            isExternal
          >
            Eri JS
          </Link>{' '}
          -{' '}
          <Link
            color="sand.600"
            href="https://github.com/EriJohnson"
            isExternal
          >
            Github
          </Link>
        </Text>
        <Spacer />
      </Flex>
    </Container>
  );
}

export default Home;
