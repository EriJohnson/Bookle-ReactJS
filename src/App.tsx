import { ChakraProvider, Container } from '@chakra-ui/react';

import Routes from './Routes';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth="container.xl">
        <Routes />
      </Container>
    </ChakraProvider>
  );
}

export default App;
