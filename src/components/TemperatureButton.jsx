import { Flex, Image, Text } from '@chakra-ui/react';
import { APP_CONFIG } from '../config/app.config';
import { useTemperature } from "../lib/useStore";

const TemperatureButton = ({img}) => {
  const { temperature, raiseTemperature } = useTemperature();

  return (
    <Flex
      className="temperature-button"
      align="center"
      borderRadius="12px"
      bg="#d6feff"
      w={{ base: '70px', md: '80px' }}
      h={{ base: '45px', md: '50px' }}
      cursor="pointer"
      title={`Temperature (${APP_CONFIG.temperature.min}-${APP_CONFIG.temperature.max}): Higher = More Creative`}
      onClick={raiseTemperature}
    >
      <Image
        className="icon"
        src={img}
        alt="Temperature"
        w="38px"
        h="38px"
        _hover={{ transform: 'scale(1.1)' }}
      />
      <Text
        className="temperature-label"
        fontSize={{ base: '1rem', md: '1.1rem' }}
        fontWeight="bold"
        color="red"
      >
        {temperature}
      </Text>
    </Flex>
  );
};

export default TemperatureButton;