import { create } from "zustand";

interface loadingVar {
  loadingTag: "basic" | "v2" | "v3";
  isLoading: boolean;
  loadingText: string;
}

interface useLoadingState extends loadingVar {
  setShowLoading: (payload: Partial<loadingVar>) => void;
}

const useLoadingStore = create<useLoadingState>((set,get) => ({
  loadingTag: "basic",
  loadingText: "",
  isLoading: false,

  setShowLoading: async (payload) => {
    console.log(payload.isLoading, "payload.isLoading");
    set((state) => ({
      isLoading: payload.isLoading,
    }));
    console.log(get().isLoading, "get().isLoading");
  },
}));

export default useLoadingStore;
