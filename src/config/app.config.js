export const APP_CONFIG = {
  // Temperature settings
  temperature: {
    min: 0.0,
    max: 1.0,
    step: 0.2,
    default: 0.6,
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
    [
      "Top-center green box",
      "",
      "Scrolldown: Select language",
      "Green icon: Flip translate direction"
    ],
    [
      "Middle blue box",
      "",
      "Left: Enter your input",
      "Right: Automatically show translation"
    ],
    [
      "Middle blue box",
      "",
      "🤠: Open emoji picker",
      "Click outside modal to close picker"
    ],
    [
      "Middle blue box",
      "",
      "🌡️: Change prompt's temperature",
      "(higher → more creative output)"
    ],
    [
      "Middle column action icons:",
      "",
      "▶️ rerun",
      "❌ clear text",
      "💾 save",
    ],
    [
      "Saved Translations (white box)",
      "",
      "▶️: Rerun with this input",
      "❌: Clear save"
    ]
  ],

  
  // Emoji picker
  emojiPicker: {
    categories: ['smileys_people', 'activities', 'animals_nature'],
    skinTonesDisabled: true,
    height: 350,
  },
};