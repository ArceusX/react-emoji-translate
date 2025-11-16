import { useState, useCallback, useMemo } from "react";
import { Box, Flex, Textarea, Button, Image } from '@chakra-ui/react';
import EmojiPicker from "emoji-picker-react";
import TemperatureButton from "./TemperatureButton";
import ActionContainer from "./ActionContainer";
import { APP_CONFIG } from '../config/app.config';
import useStore from '../lib/useStore';
import useTranslate from '../lib/useTranslate';

const PromptContainer = ({ placeholder = "Input" }) => {
  const {
    temperature, language, toEmoji,
    input, output, setInput, setOutput,
  } = useStore();

  const [dummy, setDummy] = useState(false);
  const [emojiOpen, setEmojiOpen] = useState(false);

  // Pass setOutput for both success and error messages
  useTranslate(
    setOutput, setOutput,
    input, language, temperature, toEmoji, dummy
  );

  const handleEmoji = useCallback((e) => {
    setInput(input + e.emoji);
    setEmojiOpen(false);
  }, [input, setInput]);

  const copyToClipboard = useCallback((text) => {
    navigator.clipboard.writeText(text);
  }, []);

  const emojiPickerWidth = useMemo(
    () => Math.min(400, window.innerWidth - 40),
    []
  );

  return (
    <Box
      className="prompt-container"
      bg="rgb(242, 252, 255)"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      border=".8px solid orange"
      borderRadius="10px"
      w={{ base: '95%', md: '90%', lg: 'min(90vw, 1120px)' }}
      m="12px"
      h={{ base: '500px', md: '300px', xl: '250px'}}
      p={{ base: '12px', md: '16px' }}
    >
      <Flex
        className="text-container"
        justify="space-between"
        align="flex-start"
        position="relative"
        mb="18px"
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Box className="input-container" flex={1} w="100%" maxW={{ md: '47%' }}>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            maxLength={APP_CONFIG.input.maxLength}
            bg="transparent"
            w="100%"
            fontSize={{ base: '0.9rem', md: '1rem' }}
            p="7px"
            letterSpacing=".9px"
            minH={{ base: '150px', lg: '130px'}}
            borderRadius="5px"
            resize="none"
            color="red"
          />

          <Box className="emoji-picker" mt="10px">
            <Image
              src="./icon.png"
              alt=""
              w="40px"
              h="40px"
              onClick={() => setEmojiOpen((prev) => !prev)}
              cursor="pointer"
            />
            {emojiOpen && (
              <Box position="absolute" zIndex={10} mt="5px">
                <EmojiPicker 
                  onEmojiClick={handleEmoji}
                  categories={APP_CONFIG.emojiPicker.categories}
                  skinTonesDisabled={APP_CONFIG.emojiPicker.skinTonesDisabled}
                  height={APP_CONFIG.emojiPicker.height}
                  width={emojiPickerWidth}
                />
              </Box>
            )}
          </Box>
        </Box>

        <Box flexShrink={0} alignSelf={{ base: 'center', md: 'flex-start' }}>
          <ActionContainer setDummy={setDummy} />
        </Box>
        
        <Box className="output-container" flex={1} w="100%" maxW={{ md: '47%' }}>
          <Textarea
            value={output}
            readOnly
            placeholder="Output"
            bg="transparent"
            w="100%"
            fontSize={{ base: '0.9rem', md: '1rem' }}
            p="7px"
            letterSpacing=".9px"
            minH={{ base: '150px', lg: '130px'}}
            borderRadius="5px"
            resize="none"
            color="red"
          />
        </Box>
      </Flex>

      <Flex className="copy-container"
        justify="space-evenly" align="center" flexWrap="wrap" gap="10px"
        position="relative"
        bottom={{ base: 0, md: '30px', xl: '40px' }}
      >    
        <Button
          bg="rgb(255, 191, 117)"
          p={{ base: '0.4rem 0.6rem', md: '0.4rem .8rem' }}
          borderRadius="8px"
          fontSize={{ base: '0.75rem', md: '.9rem' }}
          onClick={() => copyToClipboard(input)}
          _hover={{ transform: 'scale(1.1)' }}
        >
          Copy to Clip📋
        </Button>
        <TemperatureButton img="/thermometer.png" />
        <Button
          bg="rgb(255, 191, 117)"
          p={{ base: '0.4rem 0.6rem', md: '0.4rem .8rem' }}
          borderRadius="8px"
          fontSize={{ base: '0.75rem', md: '.9rem' }}
          onClick={() => copyToClipboard(output)}
          _hover={{ transform: 'scale(1.1)' }}
        >
          Copy to Clip📋
        </Button>
      </Flex>
    </Box>
  );
};

export default PromptContainer;