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
    sand: {
      '50': '#FAF4EA',
      '100': '#F1E0C5',
      '200': '#E9CBA0',
      '300': '#E0B77B',
      '400': '#D7A356',
      '500': '#CE8F31',
      '600': '#A57227',
      '700': '#7C561D',
      '800': '#523914',
      '900': '#291D0A',
    },
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
