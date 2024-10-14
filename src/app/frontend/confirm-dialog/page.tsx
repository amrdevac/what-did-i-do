"use client";

import BasicInput, {
  InputChangeEvent,
  InputProps,
} from "@/components/BasicInput/BasicInput";
import { ConfirmDialog } from "@/components/ConfirmDialog/ConfirmDialog";
import { useConfirmationStore } from "@/store/ConfirmDialog/useConfirmDialogStore";
import useBasicValidationStore from "@/store/useBasicValidationStore";
import dd from "@/utils/dd/dd";
import { validateInput, Validation } from "@/utils/validation/valdiation";
import ValidationParse from "@/utils/validation/valdiationParse";
import { useEffect } from "react";

const ConfirmDialogPage = () => {
  const mainStore = useBasicValidationStore();
  const frameData: InputProps[] = [
    {
      label: "Nama",
      name: "nama",
      type: "text",
      grid: 12,
      value: mainStore.form.nama,
      placeholder: "Masukkan nama",
      bottomLable: <ValidationParse inputName={"nama"} />,
      onChange: (e: InputChangeEvent) => {
        mainStore.setForm({
          col: "nama",
          val: e.target.value,
        });
      },
    },
    {
      label: "Deskripsi",
      name: "deskripsi",
      type: "text",
      grid: 12,
      value: mainStore.form.deskripsi,
      placeholder: "Masukkan Deskrisi",
      onChange: (e: InputChangeEvent) => {
        mainStore.setForm({
          col: "deskripsi",
          val: e.target.value,
        });
      },
      bottomLable: <ValidationParse inputName="deskripsi" />,
    },
  ];

  const useConfirmDialog = useConfirmationStore();
  return (
    <div>
      <ConfirmDialog id="confirm-dialog" />

      <div className="flex gap-3 text-on-dark">
        <div>Confirm Dialog V1</div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const rule: Validation = {
            nama: "",
            deskripsi: "",
          };

          validateInput({
            objInput: mainStore.form,
            validation: rule,
          });
          useConfirmDialog.confirmDialog({
            idModal: "confirm-dialog",
            useStore: useBasicValidationStore,
            confirmText: "Apakah anda yakin ingin melakukan hal ini ?",
            withCustomLoading: true,
            actionOk: [
              {
                run: () => mainStore.fetchTodo(),
                detailError: {
                  colError: "validationErrors",
                  typeError: "looping",
                  typeValue: "objectArr",
                  objColError: "message",
                },
                loadingText: "Memuat data",
              },
              {
                run: () => {
                  console.log(2);
                },
              },
              {
                run: () => {
                  console.log(3);
                },
              },
            ],
          });
        }}
      >
        <div className="grid grid-cols-12 gap-3 mt-5">
          {frameData.map((inputProps, idx) => (
            <BasicInput
              key={idx}
              {...inputProps}
              onChange={(e: InputChangeEvent) => {
                if (inputProps.onChange) {
                  inputProps.onChange(e);
                }
              }}
            />
          ))}
        </div>
        <button className="btn btn-primary btn-outline btn-sm  text-on-dark mt-5 w-full ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConfirmDialogPage;
