import {
  ChakraProvider,
  Container,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Stack>
          <Heading>Bookle</Heading>
          <Text>O seu buscador de Livros na internet</Text>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
