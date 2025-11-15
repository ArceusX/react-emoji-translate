import { useRef, useEffect, useMemo } from 'react';

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

function defaultPrompt(input, language, toEmoji) {
  return toEmoji
    ? `Translate "${input}" in ${language} to emojis. No words, keep short.`
    : `Translate ${input} emojis to ${language}. No emojis, keep short.`;
}

const useTranslate = (
  setOutput,
  setErrorMessage,
  input,
  language,
  temperature,
  toEmoji,
  dummy,
  delay = 750,
  prompt = defaultPrompt
) => {

  const messages = useRef([]);

  const fetchReply = useMemo(
    () =>
      debounce(async (input, language, temperature, toEmoji) => {
        if (!input || !input.trim()) {
          setOutput("");
          return;
        }

        try {
          const content = prompt(input, language, toEmoji);
          messages.current.push({ role: "user", content });

          const res = await fetch("/.netlify/functions/openai", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              messages: messages.current,
              temperature
            })
          });

          if (!res.ok) {
            setErrorMessage(`Error ${res.status}`);
            return;
          }

          const data = await res.json();
          const reply = data.reply;

          setOutput(reply);
          if (reply) {
            messages.current.push({ role: "assistant", content: reply });
          }

        } catch (err) {
          setErrorMessage("Network error or unexpected issue.");
        }
      }, delay),
    []
  );

  useEffect(() => {
    messages.current = [];
    fetchReply(input, language, temperature, toEmoji);
  }, [input, language, temperature, toEmoji]);

  useEffect(() => {
    messages.current.push({ role: "user", content: "Give a different variation." });
    fetchReply(input, language, temperature, toEmoji);
  }, [dummy, fetchReply]);

  return null;
};

export default useTranslate;
