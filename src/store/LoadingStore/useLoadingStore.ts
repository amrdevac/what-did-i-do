import { create } from "zustand";

interface loadingVar {
  loadingTag: "basic" | "v2" | "v3";
  isLoading: boolean;
  loadingText: string;
}

interface useLoadingState extends loadingVar {
  setShowLoading: (payload: Partial<loadingVar>) => void;
}

const useLoadingStore = create<useLoadingState>((set) => ({
  loadingTag: "basic",
  loadingText: "",
  isLoading: false,

  setShowLoading: (payload) => set((state) => ({})),
}));

export default useLoadingStore;
