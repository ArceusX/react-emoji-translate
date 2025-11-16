import { useCallback } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { useInput, useSaved } from '../lib/useStore';

const ActionContainer = ({ setDummy }) => {
  const { setInput } = useInput();
  const { setSaved } = useSaved();

  const handleRerun = useCallback(() => {
    setDummy(prev => !prev);
  }, [setDummy]);

  const handleClear = useCallback(() => {
    setInput("");
  }, [setInput]);

  return (
    <Flex
      className="action-container"
      flexDir={{ base: 'row', md: 'column' }}
      align="center"
      justify="center"
      flexShrink={0}
      gap="12px"
      w={{ base: '50px', md: '50px' }}
      h={{ base: 'auto', md: '125px' }}
      cursor="pointer"
      my={{ base: '10px', md: 0 }}
    >
      <Image
        src="/rerun.png"
        alt="Rerun"
        borderRadius="50%"
        w="35px"
        h="35px"
        p="3px"
        title="Rerun"
        onClick={handleRerun}
        _hover={{ bg: '#b4ecc1' }}
      />
      <Image
        src="/cross.png"
        alt="Clear"
        borderRadius="50%"
        w="35px"
        h="35px"
        p="3px"
        title="Clear Input"
        onClick={handleClear}
        _hover={{ bg: '#b4ecc1' }}
      />
      <Image
        src="/save.png"
        alt="Save"
        borderRadius="50%"
        w="35px"
        h="35px"
        p="3px"
        title="Save"
        onClick={setSaved}
        _hover={{ bg: '#b4ecc1' }}
      />
    </Flex>
  );
};

export default ActionContainer;