import { useMemo } from 'react';
import { Flex, Select, Text, Box, Image } from '@chakra-ui/react';
import { APP_CONFIG } from "../config/app.config";
import useStore from "../lib/useStore";

const LanguageSelector = ({ emoji, icon }) => {
  const { language, setLanguage, toEmoji, toggleToEmoji } = useStore();

  const languageOptions = useMemo(
    () => APP_CONFIG.languages.map((lang, index) => (
      <option key={index} value={lang}>
        {lang}
      </option>
    )),
    []
  );

  return (
    <Flex
      className="language-selector"
      align="center"
      h="auto"
      gap={{ base: '10px', }}
      flexWrap="wrap"
      justifyContent="center"
      w="500px"
    >
      <Flex
        className="main-container"
        w={{ base: '100%', sm: '320px', md: '360px' }}
        align="center"
        justify="space-between"
        bg="#dffbbf"
        borderRadius="5px"
        p="8px 10px"
        minH="44px"
      >
        {toEmoji ? (
          <>
            <Select
              className="dropdown"
              w="40%"
              minW="80px"
              h="28px"
              fontSize={{ base: '14px', md: '16px' }}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              border="1px solid #ccc"
            >
              {languageOptions}
            </Select>
            <Text
              className="label"
              flexShrink={0}
              mx={{ base: '8px', md: '20px' }}
              fontWeight="bold"
              fontSize={{ base: '14px', md: '16px' }}
            >
              To
            </Text>
            <Flex className="emoji" justify="center" align="center" w="35%">
              <Text fontSize={{ base: '22px', md: '26px' }}>{emoji}</Text>
            </Flex>
          </>
        ) : (
          <>
            <Flex className="emoji" justify="center" align="center" w="35%">
              <Text fontSize={{ base: '22px', md: '26px' }}>{emoji}</Text>
            </Flex>
            <Text
              className="label"
              flexShrink={0}
              mx={{ base: '8px', md: '20px' }}
              fontWeight="bold"
              fontSize={{ base: '14px', md: '16px' }}
            >
              To
            </Text>
            <Select
              className="dropdown"
              w="35%"
              minW="80px"
              h="28px"
              fontSize={{ base: '14px', md: '16px' }}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              border="1px solid #ccc"
            >
              {languageOptions}
            </Select>
          </>
        )}
      </Flex>
      
      <Flex
        className="refresh-container"
        cursor="pointer"
        justify="center"
        align="center"
        flexShrink={0}
        w="120px"
        onClick={() => toggleToEmoji()}
        flexDir="column"
        gap="4px"
      >
        <Image className="icon" src={icon} alt="Refresh" w="36px" h="36px" />
      </Flex>
    </Flex>
  );
};

export default LanguageSelector;