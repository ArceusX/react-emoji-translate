import { Select, Flex, Text } from '@chakra-ui/react';
import { getEnabledProviders } from '../config/app.config';
import { useProvider } from '../lib/useStore';

const ProviderSelector = () => {
  const { provider, setProvider } = useProvider();
  const enabledProviders = getEnabledProviders();

  return (
    <Flex align="center" gap="2" bg="blue.50" p="2" borderRadius="5px">
      <Text fontSize="sm" fontWeight="bold">AI Model:</Text>
      <Select
        size="sm"
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        w="180px"
      >
        {enabledProviders.map(({ key, name, icon }) => (
          <option key={key} value={key}>
            {icon} {name}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default ProviderSelector;