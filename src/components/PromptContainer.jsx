import { useState } from "react";
import "./PromptContainer.css";
import TemperatureButton from "./TemperatureButton";
import ActionContainer from "./ActionContainer";
import useStore from '../lib/useStore';
import useTranslate from '../lib/useTranslate';

const PromptContainer = (
  { apiKey, placeholder = "Input", maxLength = 200 }
) => {
    const {
      temperature, language, toEmoji, 
      input, output, setInput, setOutput,
    } = useStore();

    const [dummy, setDummy]   = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useTranslate(
      apiKey, setOutput, setErrorMessage,
      input, language, temperature, toEmoji, dummy);

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
