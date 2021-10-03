import { ChakraProvider } from '@chakra-ui/react';
import Routes from './Routes';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
