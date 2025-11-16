import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        fontWeight: 500,
        color: 'blue',
        _hover: {
          color: '#e34c3e',
          borderColor: '#747bff',
        },
      },
    },
  },
});

export default theme;