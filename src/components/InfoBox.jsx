import { useState, useEffect, useRef } from "react";
import { Box, Button, Textarea, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const MESSAGE = [
  "Top lightgreen box: Set language in scrolldown, translate direction by clicking [Flip]",
  "Center blue box: Type your input in the left box to translate",
  "Center blue box: Click 💾 to save text to local storage",
  "Lower white box: Click ▶️ to rerun with that input",
  "Center column icons: ▶️ rerun, ❌ clear text, 💾 save",
  "🌡️ to change temperature (higher → more creative output)"
];

const InfoBox = ({ value = MESSAGE }) => {
  const [isOpen, setIsOpen] = useState(true);
  const boxRef = useRef(null);

  // FIX: Only attach listener when open
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <Box
      ref={boxRef}
      className="info-box"
      position={{ base: 'relative', xl: 'absolute' }}
      top={{ xl: '40px' }}
      left={{ xl: '40px' }}
      border="1px solid #ccc"
      borderRadius="8px"
      p="2px"
      zIndex={9999}
      w={{ base: '100%', sm: '320px', md: '360px' }}
      mb={{ base: '10px', lg: 0 }}
      bg="white"
    >
      <Button
        className="info-box-btn"
        bg="purple.300"
        color="white"
        w="100%"
        fontSize={{ base: '16px', md: '18px' }}
        fontWeight="bold"
        onClick={() => setIsOpen(!isOpen)}
        borderRadius="5px"
        p="10px"
        _hover={{ bg: '#c57dd6' }}
      >
        {`👉 ${isOpen ? "Hide" : "Show"} Help`}
      </Button>

      {isOpen && (
        <Box
          className="info-box-message"
          mt="12px"
          position="absolute"
          top="60px"
          left="0"
          right="0"
          zIndex={99999}
          bg="yellow.50"      
          w="100%"     
        >
          <Tabs variant="enclosed" colorScheme="purple" isFitted>
            <TabList>
              {value.map((_, i) => (
                <Tab
                  key={i} fontSize={{ base: "12px", md: "14px" }}
                  _selected={{
                    bg: "purple.300",
                  }}
                >
                  {i + 1}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {value.map((text, i) => (
                <TabPanel key={i}>
                  <Textarea
                    readOnly
                    overflowY="auto"
                    value={text}
                    w="100%"
                    h={{ base: '140px', md: '140px' }}
                    resize="none"
                    fontSize={{ base: '16px', md: '18px' }}
                    border="1px solid #ccc"
                    p="10px"
                    borderRadius="5px"
                    lineHeight={1.5}
                    bg="gray.50"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      )}
    </Box>
  );
};

export default InfoBox;