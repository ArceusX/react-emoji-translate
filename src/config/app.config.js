export const APP_CONFIG = {
  // Temperature settings
  temperature: {
    min: 0.1,
    max: 1.0,
    step: 0.1,
    default: 0.5,
  },
  
  // Saved items configuration
  saved: {
    maxItems: 2,  // Configurable number of saved slots
  },
  
  // Supported languages
  languages: [
    "English",
    "Español", 
    "中文",
    "日本語",
    "Français",
  ],
  
  // Input constraints
  input: {
    maxLength: 200,
    debounceDelay: 750,
  },
  
  // App branding
  app: {
    title: "😎 AI Emoji Translate 💬",
    subtitle: "Translate text to emojis & back, with ChatGPT",
    emoji: "🤩",
  },
  
  // Author info
  author: {
    name: "🧑 Triet Lieu",
    email: "📧 trielieu@gmail.com",
    githubUrl: "https://github.com/ArceusX/react-emoji-translate/tree/main",
    githubIcon: "./github.png",
  },
  
  // Help messages
  helpMessages: [
    "Top lightgreen box: Set language in scrolldown, translate direction by clicking [Flip]",
    "Center blue box: Type your input in the left box to translate",
    "Center blue box: Click 💾 to save text to local storage",
    "Lower white box: Click ▶️ to rerun with that input",
    "Center column icons: ▶️ rerun, ❌ clear text, 💾 save",
    "🌡️ to change temperature (higher → more creative output)"
  ],
  
  // Emoji picker
  emojiPicker: {
    categories: ['smileys_people', 'activities', 'animals_nature'],
    skinTonesDisabled: true,
    height: 350,
  },
};