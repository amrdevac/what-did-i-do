import { create } from "zustand";
import { DetailError } from "./useConfirmDialogStore";
interface infoStruct {
  errorMessage: string;
  errorObj: any;
}

interface useConfirmInfo {
  info: infoStruct;
  setDetailError: (payload: Partial<infoStruct>) => void;
}
const useConfirmInfoStore = create<useConfirmInfo>((set, get) => ({
  info: {
    errorMessage: "",
    errorObj: "",
  },

  setDetailError: (payload) => {
    set({
      info: {
        errorMessage: payload.errorMessage ?? "",
        errorObj: payload.errorObj,
      },
    });
  },
}));

export default useConfirmInfoStore;
