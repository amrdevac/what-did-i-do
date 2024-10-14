import { create } from "zustand";
import { DetailError } from "./useConfirmDialogStore";
interface infoStruct {
  errorMsg: string;
  errorObj: any;
}

interface useConfirmInfo {
  info: infoStruct;
  setDetailError: (payload: Partial<infoStruct>) => void;
}
const useConfirmInfoStore = create<useConfirmInfo>((set, get) => ({
  info: {
    errorMsg: "",
    detailErrorMsg: "",
    errorObj: "",
  },

  setDetailError: (payload) => {
    set({
      info: {
        errorMsg: payload.errorMsg ?? "",
        errorObj: payload.errorObj,
      },
    });
  },
}));

export default useConfirmInfoStore;
