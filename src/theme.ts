import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/libre-caslon-text/400.css';

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Libre Caslon Text',
    body: 'Montserrat',
  },
  colors: {
    primary: '#DAAA63',
    secondary: '#2C1810',
    backgroundColor: '#E5E5E5',
  },
  styles: {
    global: {
      body: {
        bg: 'backgroundColor',
        color: 'secondary',
      },
    },
  },
});

export default theme;
