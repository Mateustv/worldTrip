import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      500: '#FFBA08'
    },
    gray: {
      100: '#DADADA',
      300: ' #999999',
      700: '#47585B'
    },
    white: {
      100: '#F5F8FA',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      'html, body': {
        color: 'gray.700',
        bg: 'white',
        lineHeight: 'tall',
      },
      a: {
        color: 'teal.500',
      },
    },
  },
})