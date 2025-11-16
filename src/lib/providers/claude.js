import { TranslationProvider } from './base';
export class ClaudeProvider extends TranslationProvider {
  async translate(messages, temperature) {
    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        messages, 
        temperature,
        model: "claude-3-5-sonnet-20241022"
      })
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    const data = await response.json();
    // Claude returns different format
    return data.reply || data.content?.[0]?.text;
  }
}