import { create } from "zustand";

interface Form {
  nama: string;
  deskripsi: string;
}

interface BasicValidationForm {
  form: Form;
  setForm: ({ col, val }: { col: keyof Form; val: string }) => void;
}

const useBasicValidationStore = create<BasicValidationForm>((set) => ({
  form: {
    deskripsi: "",
    nama: "",
  },
  setForm: ({ col, val }) => {
    set((state) => ({
      form: {
        ...state.form,
        [col]: val,
      },
    }));
  },
}));

export default useBasicValidationStore;
// const basicValidationForm = create<any>
