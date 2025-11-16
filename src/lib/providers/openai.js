import { TranslationProvider } from './base';

export class OpenAIProvider extends TranslationProvider {
  async translate(messages, temperature) {
    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, temperature })
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    const data = await response.json();
    return data.reply;
  }
}