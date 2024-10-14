import { create } from "zustand";

interface useLoadingState {
  loadingTag: "basic" | "v2" | "v3";
  showLoading: boolean;
  loadingText: string;
}

const useLoadingStore = create<useLoadingState>((set) => ({
  loadingTag: "basic",
  loadingText: "",
  showLoading: false,

  setShowLoading: (payload: useLoadingState) => set((state) => ({})),
}));
