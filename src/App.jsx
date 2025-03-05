import { useState, useEffect } from 'react';
import useStore from './lib/useStore';
import LanguageSelector from "./components/LanguageSelector";
import InfoBox from "./components/InfoBox.jsx";
import PromptContainer from "./components/PromptContainer";
import SavedContainer from './components/SavedContainer';

import './App.css';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

function App() {
  const [apiKey, setApiKey] = useState(API_KEY);
  const [errorMessage, setErrorMessage] = useState("");

  const { setInput, saved } = useStore();

  useEffect(() => {
    if (!apiKey) {
      setErrorMessage("OpenAI API key is missing");
    } else {
      setErrorMessage("");
    }
  }, [apiKey]);

  // On mount, set order to upload input, outp
  // ut to localStorage on exit
  useEffect(() => {
    const handleBeforeUnload = () => {
      const { temperature, language, toEmoji, saved } = useStore.getState();
      localStorage.setItem("ret-input", JSON.stringify(saved.input));
      localStorage.setItem("ret-output", JSON.stringify(saved.output));
      localStorage.setItem("ret-temperature", temperature);
      localStorage.setItem("ret-toEmoji", toEmoji);
      localStorage.setItem("ret-language", language);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <>
      <h1>😁 AI Emoji Translator 💬</h1>
      <InfoBox />
      <LanguageSelector 
        languages={["English", "Español", "中文", "Deutsch", "日本語"]}
        emoji="🤩"
        icon="./refresh.png"
      />
      <PromptContainer
        apiKey = {apiKey}
        placeholder="Input"
        errorMessage={errorMessage}
      />

      {/* handleIcon: 2 params. Set (i)th readonly input 
          value as modifiable input in PromptContainer  */}
      <SavedContainer
      placeholder="Click each ▶️ to rerun" icon = "/rerun.png"
      handleIcon = {(arg, i) => setInput(arg.input[i])}
      data = {saved} />
      
      <footer>
        <a href="https://github.com/ArceusX?tab=repositories" target="_blank" rel="noreferrer">
          <img src="./github.png" alt="GitHub" />
          <p>ArceusX: Triet Lieu</p>
        </a>
      </footer>
    </>
  );
}

export default App;
