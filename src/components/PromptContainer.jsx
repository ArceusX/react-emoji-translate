import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import TemperatureButton from "./TemperatureButton";
import ActionContainer from "./ActionContainer";
import useStore from '../lib/useStore';
import useTranslate from '../lib/useTranslate';

import "./PromptContainer.css";

const PromptContainer = (
  { apiKey, placeholder = "Input", maxLength = 200 }
) => {
    const {
      temperature, language, toEmoji, 
      input, output, setInput, setOutput,
    } = useStore();

    const [dummy, setDummy]   = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [emojiOpen, setEmojiOpen] = useState(false);

    useTranslate(
      apiKey, setOutput, setErrorMessage,
      input, language, temperature, toEmoji, dummy);

    const handleEmoji = (e) => {
      console.log(input + e.emoji);
      setInput(input + e.emoji);
      setEmojiOpen(false);
    };

    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
    };
  
    return (
      <div className="prompt-container">
        <div className="text-container">
          <div className="input-container">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              maxLength={maxLength}
            />

            <div className="emoji-picker">
              <img
                src="./icon.png"
                alt=""
                onClick={() => setEmojiOpen((prev) => !prev)}
              />
              <div className="picker">
                <EmojiPicker 
                  open={emojiOpen} 
                  onEmojiClick={handleEmoji}
                  categories={['smileys_people', 'activities', 'animals_nature', ]} 
                  skinTonesDisabled={true}
                  height={350} width={400} 
                />
              </div>
            </div>
          </div>

          <ActionContainer setDummy={setDummy} />
          
          <div className="output-container">
            <textarea
              value={output}
              readOnly
              placeholder="Output"
            />
          </div>
        </div>
  
        <div className="copy-container">
          <button onClick={() => copyToClipboard(input)}>Copy to Clip📋</button>
          <TemperatureButton img="/thermometer.png" />
          <button onClick={() => copyToClipboard(output)}>Copy to Clip📋</button>
        </div>
  
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    );
  };

export default PromptContainer;
