export class TranslationProvider {
  constructor(config) {
    this.config = config;
  }
  
  async translate(messages, temperature) {
    throw new Error('Must implement translate()');
  }
  
  get name() {
    return this.config.name;
  }
  
  get endpoint() {
    return this.config.endpoint;
  }
}