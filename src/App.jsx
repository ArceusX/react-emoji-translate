import { useState, useEffect } from 'react';
import useStore from './lib/useStore';
import { LanguageSelector, InfoBox, PromptContainer, SavedContainer } from "./components";

import "./App.css";

function App() {
  const [errorMessage, setErrorMessage] = useState("");

  const { setInput, saved } = useStore();

  // No API key needed on frontend
  useEffect(() => {
    setErrorMessage(""); 
  }, []);

  // Save state to localStorage on page exit
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
      <h1 title="With ChatGPT">😁 AI Emoji Translator 💬</h1>

      <InfoBox />

      <LanguageSelector 
        languages={["English", "Español", "中文", "Deutsch", "日本語"]}
        emoji="🤩"
        icon="./refresh.png"
      />

      <PromptContainer
        placeholder="Input"
        errorMessage={errorMessage}
      />

      <SavedContainer
        placeholder="Click each ▶️ to rerun"
        icon="/rerun.png"
        handleIcon={(arg, i) => setInput(arg.input[i])}
        data={saved}
      />

      <footer>
        <a
          href="https://github.com/ArceusX?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./github.png" alt="GitHub" />
          <p>ArceusX: Triet Lieu</p>
        </a>
      </footer>
    </>
  );
}

export default App;
