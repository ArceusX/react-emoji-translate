import { useState, useEffect, useRef } from "react";
import { Box, Button, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const InfoBox = ({ info }) => {
  const [isOpen, setIsOpen] = useState(true);
  const boxRef = useRef(null);

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
        fontSize={{ base: '14px', md: '16px' }}
        fontWeight="bold"
        onClick={() => setIsOpen(!isOpen)}
        borderRadius="5px"
        p="8px"
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
              {info.map((_, i) => (
                <Tab
                  key={i} 
                  fontSize={{ base: "14px", }}
                  _selected={{ bg: "purple.300" }}
                >
                  {i + 1}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {info.map((lines, i) => (
                <TabPanel key={i}>
                  <Box
                    h={{ base: '140px', md: '140px' }}
                    overflowY="auto"
                    p="8px"
                    bg="gray.50"
                    border="1px solid #ccc"
                    borderRadius="5px"
                    lineHeight={1.3}
                  >
                    {lines.map((line, index) =>
                      line === "" ? (
                        <Box key={index} h="8px" /> // empty line
                      ) : (
                        <Text key={index} mb={1} fontSize={{ base: "18px", }}>
                          {line}
                        </Text>
                      )
                    )}
                  </Box>
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