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

import { SearchIcon } from '@chakra-ui/icons';

function Home() {
  return (
    <Container maxWidth="container.xl">
      <Flex h="100vh" direction="column" align="center">
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
          />
        </InputGroup>

        <Button marginTop={6} colorScheme="sand" color="white">
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
