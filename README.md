# 😁  Emoji Translate App💬
Translate emojis and back to human text, in multiple languages **

## Live Demo

[Emoji Translate](https://emo-translate.netlify.app/)  

## Technologies Used

- **React**: Front-end library to create modular JS code
- **State Management**: Manage states across components with **Zustand**
- **ChatGPT**: Return translations through API Calls
- **Claude** : Another supported provider

## Start

0. **Obtain OpenAI API Key**  
Go to [OpenAI Playground](https://platform.openai.com/playground/chat?models=gpt-4o)  
Minimum $5 (Tier 1) to access advanced models

1. **Run Locally**

```bash
npm install         # Install Dependencies
npm run build       # Create a production build that you can host on a server
npm run dev         # App will run on http://localhost:5173/
```

2. **Deploy on Netlify via Github**

A. Create the project on Github   
B. On Netlify, `Add new project` > `Import an existing project`.  Link the project   
C. When creating the project, paste your VITE_OPENAI_API_KEY onto ```Environment Variables```

![Demo1](https://github.com/ArceusX/react-emoji-translate/blob/main/demo/demo1.PNG)
![Demo2](https://github.com/ArceusX/react-emoji-translate/blob/main/demo/demo2.PNG)
![Demo3](https://github.com/ArceusX/react-emoji-translate/blob/main/demo/demo3.PNG)

## Folder Structure

```
components/
  ActionContainer.jsx
  InfoBox.jsx
  LanguageSelector.jsx
  PromptContainer.jsx
  PromptExample.jsx
  ProviderSelector.jsx
  SavedTranslations.jsx
  TemperatureButton.jsx

config/
  app.config.js

lib/
  providers/
    base.js
    claude.js
    openai.js
    
  useStore.js
  useTranslate.js
```

