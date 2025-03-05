import { create } from "zustand";

const useStore = create((set) => ({
  temperature:
      parseFloat(localStorage.getItem("ret-temperature")) || 0.5,
  language:
      localStorage.getItem("ret-language") || "English",
  toEmoji: (localStorage.getItem("ret-toEmoji") ?? "true") === "true",
  input: "",
  output: "",
  saved: {
    input : JSON.parse(localStorage.getItem("ret-input") || "{}"),
    output: JSON.parse(localStorage.getItem("ret-output") || "{}"),
    lastSaved: 0,
  },

  raiseTemperature: () =>
    set((state) => {
      const t = state.temperature + 0.1;
      const temperature = t > 1.0 ? 0.1 : parseFloat((t).toFixed(1));
      return { temperature };
    }),

  setLanguage: (language) => set(() => ({ language })),

  toggleToEmoji: () =>
    set((state) => {
      const newToEmoji = !state.toEmoji;
      return { toEmoji: newToEmoji };
    }),

  setInput : (input) => set(() => ({ input })),
  setOutput: (output) => set(() => ({ output })),

  setSaved: () =>
    set((state) => {
      if (state.input?.trim() !== "") {
        const newLastSaved = state.saved.lastSaved === 1 ? 0 : 1;
  
        return {
          saved: {
            input: { ...state.saved.input, [state.saved.lastSaved]: state.input },
            output: { ...state.saved.output, [state.saved.lastSaved]: state.output },
            lastSaved: newLastSaved,
          },
        };
      }
      return state;
    }),
}));

export default useStore;
