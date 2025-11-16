import { create } from "zustand";
import { APP_CONFIG } from "../config/app.config";

const useStore = create((set) => {
  // Initialize saved slots dynamically
  const initSavedSlots = () => {
    const slots = {};
    for (let i = 0; i < APP_CONFIG.saved.maxItems; i++) {
      const savedInput = localStorage.getItem(`ret-input-${i}`);
      const savedOutput = localStorage.getItem(`ret-output-${i}`);
      slots[i] = {
        input: savedInput || "",
        output: savedOutput || "",
      };
    }
    return slots;
  };

  return {
    // Temperature with config
    temperature:
      parseFloat(localStorage.getItem("ret-temperature")) || 
      APP_CONFIG.temperature.default,
    
    // Language with config
    language:
      localStorage.getItem("ret-language") || 
      APP_CONFIG.languages[0],
    
    toEmoji: (localStorage.getItem("ret-toEmoji") ?? "true") === "true",
    input: "",
    output: "",
    
    // Dynamic saved slots
    saved: initSavedSlots(),
    currentSaveSlot: 0,

    // Temperature actions using config
    raiseTemperature: () =>
      set((state) => {
        const { min, max, step } = APP_CONFIG.temperature;
        let newTemp = state.temperature + step;
        
        // Wrap around to min if exceeds max
        if (newTemp > max) {
          newTemp = min;
        }
        
        return { temperature: parseFloat(newTemp.toFixed(1)) };
      }),

    lowerTemperature: () =>
      set((state) => {
        const { min, max, step } = APP_CONFIG.temperature;
        let newTemp = state.temperature - step;
        
        // Wrap around to max if below min
        if (newTemp < min) {
          newTemp = max;
        }
        
        return { temperature: parseFloat(newTemp.toFixed(1)) };
      }),

    setLanguage: (language) => set(() => ({ language })),

    toggleToEmoji: () =>
      set((state) => ({ toEmoji: !state.toEmoji })),

    setInput: (input) => set(() => ({ input })),
    setOutput: (output) => set(() => ({ output })),

    // Save to next available slot
    setSaved: () =>
      set((state) => {
        if (!state.input?.trim()) return state;
        
        const nextSlot = (state.currentSaveSlot + 1) % APP_CONFIG.saved.maxItems;
        
        return {
          saved: {
            ...state.saved,
            [state.currentSaveSlot]: {
              input: state.input,
              output: state.output,
            },
          },
          currentSaveSlot: nextSlot,
        };
      }),
    
    // Clear specific slot
    clearSavedSlot: (slotIndex) =>
      set((state) => ({
        saved: {
          ...state.saved,
          [slotIndex]: { input: "", output: "" },
        },
      })),
    
    // Clear all slots
    clearAllSaved: () =>
      set(() => {
        const slots = {};
        for (let i = 0; i < APP_CONFIG.saved.maxItems; i++) {
          slots[i] = { input: "", output: "" };
        }
        return { saved: slots, currentSaveSlot: 0 };
      }),
  };
});

// Selectors
export const useTemperature = () => useStore(state => ({
  temperature: state.temperature,
  raiseTemperature: state.raiseTemperature,
  lowerTemperature: state.lowerTemperature,
}));

export const useLanguage = () => useStore(state => ({
  language: state.language,
  setLanguage: state.setLanguage,
}));

export const useToEmoji = () => useStore(state => ({
  toEmoji: state.toEmoji,
  toggleToEmoji: state.toggleToEmoji,
}));

export const useInput = () => useStore(state => ({
  input: state.input,
  setInput: state.setInput,
}));

export const useOutput = () => useStore(state => ({
  output: state.output,
  setOutput: state.setOutput,
}));

export const useSaved = () => useStore(state => ({
  saved: state.saved,
  setSaved: state.setSaved,
  clearSavedSlot: state.clearSavedSlot,
  clearAllSaved: state.clearAllSaved,
}));

export default useStore;