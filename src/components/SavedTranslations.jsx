import { Box, Flex, Textarea, Image, Text, Button } from '@chakra-ui/react';
import { APP_CONFIG } from '../config/app.config';

const SavedTranslations = ({ placeholder, icon, data, handleIcon = (() => {}), onClearSlot, onClearAll }) => {
  const slots = Array.from({ length: APP_CONFIG.saved.maxItems }, (_, i) => i);

  return (
    <Box
      className="saved-translations"
      display="flex"
      flexDir="column"
      align="center"
      gap="12px"
      m="12px"
      p="12px"
      w={{ base: '95%', md: '90%', lg: 'min(75vw, 1080px)' }}
      border=".8px solid orange"
      borderRadius="10px"
      textAlign="center"
    >
      <Flex justify="space-between" align="center" w="100%">
        <Text className="label" fontStyle="italic" color="red" fontSize={{ base: '0.85rem', md: '1rem' }}>
          {placeholder}
        </Text>
        <Button size="sm" colorScheme="red" onClick={onClearAll}>
          Clear All
        </Button>
      </Flex>

      {slots.map((slotIndex) => (
        <Flex
          key={slotIndex}
          className="text-container"
          justify="space-between"
          align="center"
          gap="12px"
          w="100%"
          flexDir={{ base: 'column', md: 'row' }}
        >
          <Box
            className="input-container"
            flex={1}
            border="1px solid black"
            borderRadius="5px"
            w="100%"
            overflow="hidden"
          >
            <Textarea
              value={data[slotIndex]?.input || ""}
              readOnly
              placeholder={`Input ${slotIndex + 1}`}
              border="none"
              p="7px"
              bg="transparent"
              w="100%"
              color="red"
              fontSize={{ base: '16px', md: '20px' }}
              letterSpacing=".9px"
              minH="4rem"
              resize="none"
            />
          </Box>
          <Flex gap="2" flexShrink={0}>
            <Image
              className="icon"
              src={icon}
              alt="Rerun"
              borderRadius="50%"
              w="36px"
              h="36px"
              cursor="pointer"
              onClick={() => handleIcon(data, slotIndex)}
              title="Rerun this"
            />
            <Image
              src="/cross.png"
              alt="Clear"
              borderRadius="50%"
              w="36px"
              h="36px"
              cursor="pointer"
              onClick={() => onClearSlot(slotIndex)}
              title="Clear this slot"
            />
          </Flex>
          <Box
            className="output-container"
            flex={1}
            border="1px solid black"
            borderRadius="5px"
            w="100%"
            overflow="hidden"
          >
            <Textarea
              value={data[slotIndex]?.output || ""}
              readOnly
              placeholder={`Output ${slotIndex + 1}`}
              border="none"
              p="7px"
              bg="transparent"
              w="100%"
              color="red"
              fontSize={{ base: '16px', md: '20px' }}
              letterSpacing=".9px"
              minH="4rem"
              resize="none"
            />
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default SavedTranslations;
