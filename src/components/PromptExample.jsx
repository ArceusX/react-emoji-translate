import { Box, Button } from '@chakra-ui/react';

const PromptExample = ({ onClick }) => {
  return (
    <Box
      className="prompt-example-container"
      position={{ base: 'relative', xl: 'absolute' }}
      top={{ xl: '40px' }}
      right={{ xl: '40px' }}
      border="1px solid #ccc"
      borderRadius="8px"
      p="2px"
      zIndex={9999}
      w={{ base: '120px', xl: '180px'}}
      mb={{ base: '10px', lg: 0 }}
    >
      <Button
        className="prompt-example-btn"
        bg="#d78de6"
        color="white"
        bg="green.500"
        w="100%"
        fontSize={{ base: '16px', md: '18px' }}
        fontWeight="bold"
        onClick={onClick}
        borderRadius="5px"
        p="10px"
      >
        👉 Start
      </Button>
    </Box>
  );
};

export default PromptExample;