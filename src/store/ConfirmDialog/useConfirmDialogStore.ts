import { create, StoreApi, UseBoundStore } from "zustand";

// Definisikan tipe untuk DetailError
export interface DetailErrorBase {
  typeError: "looping" | "text";
}

export interface DetailErrorText extends DetailErrorBase {
  colError: string;
  typeError: "text";
  typeValue?: "objectArr" | "arr"; // typeValue bersifat opsional
  objError?: string; // objError bersifat opsional
}

export interface DetailErrorLooping extends DetailErrorBase {
  colError: string;
  typeError: "looping";
  typeValue: "objectArr" | "arr"; // typeValue wajib
  objColError: string; // objError wajib
}

// Gabungkan kedua interface di atas
export type DetailError = DetailErrorText | DetailErrorLooping;

interface ConfirmationState {
  isOpen: boolean;
  dialogBtnResult: any | null;
  showFinishModal: boolean;
  showConfirm: boolean;
  activity: any | null;
  onErrorStop: boolean;
  confirmText: string;
  btnOk: string;
  useStore: UseBoundStore<StoreApi<any>>;
  loadingText: string;
  btnCancel: string;
  showBtnCancel: boolean;
  isError: boolean;
  errorMessage: string;
  errorObj?: any;
  actionOk: any[];
  isLoading: boolean;
  withCustomLoading: boolean;
  finishText: string;
  idModal: string;
  detailError?: DetailError;

  confirmDialog: (payload: Partial<ConfirmationState>) => void;
  confirmDialogResult: (result: any) => void;
  confirmDialogResultHandler: (result: any) => void;
  setLoadingText: (text: string) => void;
  setShowConfirm: (show: boolean) => void;
  setShowFinishModal: (show: boolean) => void;
  setLoading: (loading: boolean) => void;
}

const confirmationActivity: { [key: string]: string } = {};
confirmationActivity["save"] = "Apakah Anda yakin ingin menyimpan data?";
confirmationActivity["delete"] = "Apakah Anda yakin ingin menghapus data?";
confirmationActivity["update"] = "Apakah Anda yakin ingin memperbarui data?";

export const useConfirmationStore = create<ConfirmationState>((set, get) => ({
  isOpen: false,
  dialogBtnResult: null,
  showFinishModal: true,
  showConfirm: true,
  activity: null,
  onErrorStop: true,
  confirmText: "",
  btnOk: "Ok",
  useStore: create((set) => ({})),
  loadingText: "",
  btnCancel: "Batal",
  showBtnCancel: true,
  isError: false,
  errorMessage: "default error message",
  errorObj: {},
  actionOk: [],
  isLoading: false,
  withCustomLoading: false,
  finishText: "Proses berhasil",
  idModal: "modal_confirm",

  confirmDialog: (payload) => {
    set((state) => ({
      ...state,
      ...payload,
      confirmText: payload.activity
        ? confirmationActivity[payload.activity]
        : payload.confirmText,
    }));
    if (get().idModal) {
      const dialog = document.getElementById(
        get().idModal || "modal_confirm"
      ) as HTMLDialogElement;
      if (dialog) {
        dialog.showModal();
      }
    }
  },

  confirmDialogResult: (result) =>
    set((state) => ({ ...state, dialogBtnResult: result, isOpen: false })),
  setLoadingText: (text) => set({ loadingText: text }),
  setShowConfirm: (show) => set({ showConfirm: show }),
  setShowFinishModal: (show) => set({ showFinishModal: show }),
  setLoading: (loading) => set({ isLoading: loading }),
  confirmDialogResultHandler: async () => {
    const { actionOk, onErrorStop, showFinishModal } = get();
    const runFunctionsSequentially = async () => {
      for (const func of actionOk) {
        let responseError = {};
        set({
          loadingText: func.loadingText || "Memproses data",
          isLoading: true,
        });
        await func.run();
        const currentState = get();
        console.log(currentState.useStore.getState());
        if ("isError" in currentState.useStore.getState()) {
          const runnerStore = currentState.useStore.getState();
          if (runnerStore.isError) {
            set((state) => ({
              errorMessage: runnerStore.msgError,
              errorObj: runnerStore.dataError,
            }));
            if (onErrorStop) {
              const confirmInfo = document.getElementById(
                "confirm-info"
              ) as HTMLDialogElement;
              confirmInfo.showModal();
            }
          }
          return false;
        }
      }

      // set({
      //   isError: false,
      //   errorMessage: "",
      //   isLoading: false,
      //   showConfirm: true,
      //   loadingText: "",
      // });
      // if (showFinishModal) {
      //   document.getElementById("modal_popup_confirm")?.showModal();
      // }
      // set({ showFinishModal: true });
    };

    await runFunctionsSequentially();
  },
}));
