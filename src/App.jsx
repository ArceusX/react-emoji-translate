import { useState, useEffect } from 'react';
import { Box, Heading, Link, Flex, Image, Text } from '@chakra-ui/react';
import { APP_CONFIG } from './config/app.config';
import useStore from './lib/useStore';
import {
  LanguageSelector,
  InfoBox,
  PromptExample,
  PromptContainer,
  SavedTranslations,
} from "./components";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const { setInput, saved, clearSavedSlot, clearAllSaved } = useStore();

  useEffect(() => {
    setErrorMessage("");
    const root = document.getElementById('root');
    if (root) {
      root.style.maxWidth = '1440px';
      root.style.margin = '0 auto';
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      const state = useStore.getState();
      
      // Save all slots
      for (let i = 0; i < APP_CONFIG.saved.maxItems; i++) {
        localStorage.setItem(`ret-input-${i}`, state.saved[i]?.input || "");
        localStorage.setItem(`ret-output-${i}`, state.saved[i]?.output || "");
      }
      
      // Save other settings
      localStorage.setItem("ret-temperature", state.temperature);
      localStorage.setItem("ret-toEmoji", state.toEmoji);
      localStorage.setItem("ret-language", state.language);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <Flex className="app-container" flexDir="column" align="center"
      w="100%" maxW="1320px" h="100%" position="relative" pb="100px">
      <Heading
        fontFamily="Anton"
        textAlign="center"
        fontSize={{ base: '1.4rem', lg: '1.3rem', xl: '1.4rem' }}
        lineHeight={1.1}
        m={{ base: '10px', md: '20px' }}
        title="With ChatGPT"
      >
        {APP_CONFIG.app.title}
      </Heading>
      <Text
        textAlign="center"
        fontStyle="italic"
        fontSize={{ base: '0.9rem', }}
        color="gray.500"
        mb="1"         
      >
        {APP_CONFIG.app.subtitle}
      </Text>

      <Flex
        direction="column"
        w={{ base: '90%', md: '600px', lg: '700px' }}
        maxW="100%" 
        gap="4"
        align="center"
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="center"
          gap="4" 
          w="500px"
          mx="auto"
        >
          <InfoBox info = { APP_CONFIG.helpMessages }/>
          <PromptExample onClick={() => setInput("I love dogs and I love this app!")} />
        </Flex>

        <LanguageSelector 
          emoji={APP_CONFIG.app.emoji}
          icon="./refresh.png"
        />
      </Flex>

      <PromptContainer
        placeholder="Input"
        errorMessage={errorMessage}
      />

      <SavedTranslations
        placeholder={`Saved Translations`}
        icon="/rerun.png"
        handleIcon={(data, i) => setInput(data[i]?.input || "")}
        data={saved}
        onClearSlot={clearSavedSlot}
        onClearAll={clearAllSaved}
      />

      <Box
        as="footer"
        className="footer"
        position={{ base: 'absolute' }}
        bottom={{ base: '5px' }}
        right={{ base: '40px' }}
      >
        <Link
          href={APP_CONFIG.author.githubUrl}
          target="_blank"
          rel="noreferrer"
          display="flex"
          alignItems="center"
          bg="rgb(149, 250, 149)"
          p="10px"
          borderRadius="5px"
          textDecoration="none"
        >
          <Image src={APP_CONFIG.author.githubIcon} alt="GitHub" w="40px" h="40px" mr="8px" />
          <Box display="flex" flexDirection="column" gap="2px">
            <Text 
              className="author" 
              fontSize={{ base: '16px', }}
            >
              {APP_CONFIG.author.name}
            </Text>
            <Text 
              as="span"
              fontSize={{ base: '16px', }}
            >
              {APP_CONFIG.author.email}
            </Text>
          </Box>
        </Link>
      </Box>
    </Flex>
  );
}

export default App;