import axios from "axios";
import { create } from "zustand";

interface Form {
  nama: string;
  deskripsi: string;
}

export interface BasicValidationForm {
  form: Form;
  isError: boolean;
  msgError: string;
  dataError: any;
  setForm: ({ col, val }: { col: keyof Form; val: string }) => void;
  fetchTodo: () => void;
}

const useBasicValidationStore = create<BasicValidationForm>((set) => ({
  form: {
    deskripsi: "",
    nama: "",
  },
  isError: false,
  msgError: "",
  dataError: null,
  setForm: ({ col, val }) => {
    set((state) => ({
      form: {
        ...state.form,
        [col]: val,
      },
    }));
  },
  fetchTodo: async () => {
    set(() => ({
      isError: false,
    }));

    try {
      const response = await axios.get(
        "https://error2.free.beeceptor.com/validation"
        // "https://dummyjson.com/c/4c56-57ec-4a4f-9748"
        // "https://hub.dummyapis.com/delay?seconds=3"
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        console.log(errorMessage,"errorMessage")
        const errorObj = error.response?.data || error;
        console.log(errorMessage);
        set(() => ({
          isError: true,
          msgError: errorMessage,
          dataError: errorObj,
        }));
      } else {
        set(() => ({
          isError: true,
          msgError: "An unexpected error occurred.",
          dataError: error,
        }));
      }
    }
  },
}));

export default useBasicValidationStore;
// const basicValidationForm = create<any>
