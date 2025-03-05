import { useRef, useEffect, useMemo } from 'react';
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function defaultPrompt(input, language, toEmoji) {
  if (toEmoji) {
    return `Translate "${input}" in ${language} to emojis. No word, prefer shorter`
  }
  else {
    return `Translate ${input} emojis to ${language}. No emojis, prefer shorter`
  }
}

const useTranslate = (
  apiKey,
  setOutput,
  setErrorMessage,
  input,
  language,
  temperature,
  toEmoji,
  dummy,
  delay = 750,
  prompt = defaultPrompt) => {
    const messages = useRef([]);
    const output   = useRef("");

    const fetchReply = useMemo(() => debounce(
      async (input, language, temperature, toEmoji) => {
      if (!input || !input.trim()) {
        setOutput("");
        return;
      }
      if (!apiKey || apiKey.length < 30) {
        setErrorMessage("Error 401: invalid_api_key");
        return; 
      }

      try {
        let content = prompt(input, language, toEmoji);
        messages.current.push({ "role": "user", "content": content });
        
        let reply = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: messages.current,
          temperature: temperature
        });
        
        reply = reply.choices[0]?.message?.content || "";
        setOutput(reply);
        if (reply) {
          messages.current.push({ "role": "assistant", "content": reply});
        }
      } catch (error) {
        if (error.status) {
          setErrorMessage(`Error ${error.status}: ${error.code}`);
        } else {
          setErrorMessage("Error: Network or unexpected issue.");
        }
      }
    }, delay), [apiKey]);
  
    // fetchReply is recreated with new apiKey when it changes
    // Unlike other dependencies, no rerender on apiKey change
    useEffect(() => {
      messages.current = [];
      fetchReply(input, language, temperature, toEmoji);
    }, [input, language, temperature, toEmoji]);

    useEffect(() => {
      messages.current.push(
        { role: "user", content: "Use prior replies to craft a different one." })
        fetchReply(input, language, temperature, toEmoji);
    }, [dummy, fetchReply]);
  
    return output.current
};
  

export default useTranslate;
