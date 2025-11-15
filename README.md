# 😁  React Emoji Translate App💬
App that translates emojis and back to text. Built with **React**, **Zustand**, & **ChatGPT**

## Live Demo

View live app here: [Emoji Translate](https://emoji-translate.web.app/)  
Simplified version: [Emoji Translate Simplified](https://emoji-translate-simple.web.app/)

## Technologies Used

- **React**: Front-End Library
- **State management**: Manage states across components with **Zustand**
- **ChatGPT**: Return translations through API Calls

## Start

1. **Obtain OpenAI API Key**  
Go to [OpenAI Playground](https://platform.openai.com/playground/chat?models=gpt-4o)  
Minimum $5 (Tier 1) to access advanced models

2. **Run Locally**

```bash
npm install # Install Dependencies
npm run build // Create a production build that you can host on a server
npm run dev # App will run on http://localhost:5173/
```

2. **Deploy on Netlify via Github**

A. Create the project on Github   
B. On Netlify, `Add new project` > `Import an existing project`.  Link the project  
C. When creating the project, paste your VITE_OPENAI_API_KEY onto `Environment Variables`

```

![Demo1](https://github.com/ArceusX/react-emoji-translate/blob/main/demo/demo1.PNG)
![Demo2](https://github.com/ArceusX/react-emoji-translate/blob/main/demo/demo2.PNG)
![Demo3](https://github.com/ArceusX/react-emoji-translate/blob/main/demo/demo3.PNG)