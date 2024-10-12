import { create } from "zustand";

interface ValidateSlice {
  validation: {
    [key: string] : string[]
  };
  setValidation: (newRule: any) => void;
  resetValidation: () => void;
}

const useValidationStore = create<ValidateSlice>((set) => ({
  validation: {},
  setValidation: (newRule: any) =>
    set(() => ({
      validation: newRule,
    })),
  resetValidation: () =>
    set(() => ({
      validation: {},
    })),
}));

export default useValidationStore;
