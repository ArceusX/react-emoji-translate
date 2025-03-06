# 😁  React Emoji Translate App💬
App that translates emojis and back to text. Built with **React**, **Zustand**, & **ChatGPT**

## Live Demo

View the app live here: [Emoji Translate](https://emoji-translate.web.app/)
Simplified version: [Emoji Translate Simplified](https://emoji-translate-simple.web.app/)

## Technologies Used

- **React**: Front-End Library
- **State management**: Manage states across components with **Zustand**
- **ChatGPT**: Return translations through API Calls

## Start

1. Obtain OpenAI API Key
Go https://platform.openai.com/playground/chat?models=gpt-4o
Need to pay minimum of $5 (Tier 1) to get access to advanced models

2. **Deploy on Firebase (Only Need to Run Once)**

```bash
npm install -g firebase-tools # Enable Firebase commands in cmd such as login, deploy
firebase login
firebase init # Select which services to use. Create configuration files like firebase.json
npm run build # Build optimized build folder before deploying to Firebase
firebase deploy
```

3. **Run Locally**

```bash
npm install # Install Dependencies
npm run build // Create a production build that you can host on a server
npm run dev # App will run on http://localhost:5173/
```

![Demo1](https://github.com/ArceusX/react-emoji-translate/blob/main/public/demo/demo1.PNG)
![Demo2](https://github.com/ArceusX/react-emoji-translate/blob/main/public/demo/demo2.PNG)
![Demo3](https://github.com/ArceusX/react-emoji-translate/blob/main/public/demo/demo3.PNG)