import { APP_CONFIG } from '../../config/app.config';
import { OpenAIProvider } from './openai';
import { ClaudeProvider } from './claude';

const providerInstances = {};

export function getProvider(providerKey) {
  // Return cached instance if exists
  if (providerInstances[providerKey]) {
    return providerInstances[providerKey];
  }
  
  const config = APP_CONFIG.providers[providerKey];
  if (!config || !config.enabled) {
    // Fallback to default provider
    return getProvider(APP_CONFIG.defaultProvider);
  }
  
  // Create new instance based on provider type
  let provider;
  switch (providerKey) {
    case 'openai':
      provider = new OpenAIProvider(config);
      break;
    case 'claude':
      provider = new ClaudeProvider(config);
      break;
    default:
      throw new Error(`Unknown provider: ${providerKey}`);
  }
  
  // Cache it
  providerInstances[providerKey] = provider;
  return provider;
}