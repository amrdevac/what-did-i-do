"use client";

import BasicInput, {
  InputChangeEvent,
  InputProps,
} from "@/components/BasicInput/BasicInput";
import { ChangeEvent, useState } from "react";

const BasicInputPage = () => {
  const [nama, setNama] = useState("");

  const frameData: InputProps[] = [
    {
      label: "Nama",
      type: "text",
      required: true,
      grid: 12,
      id: "input_nama",
      onChange: (e: InputChangeEvent) => {
        setNama(e.target.value);
      },
      name: "nama",
      value: nama,
      placeholder: "Masukkan nama",
    },
    {
      label: "Email",
      type: "email",
      required: true,
      grid: 6,
      id: "input_email",
      name: "email",
      value: "",
      placeholder: "Masukkan email",
    },
    {
      label: "Pilih Gender",
      type: "select",
      grid: 6,
      id: "input_gender",
      name: "gender",
      options: [
        { label: "Pria", value: "pria" },
        { label: "Wanita", value: "wanita" },
      ],
      selectedValue: "",
    },
    {
      label: "Upload Foto",
      type: "file",
      grid: 12,
      id: "input_file",
      name: "foto",
      value: "",
    },
    {
      label: "Custom Input",
      type: "custom",
      grid: 12,
      custom: (
        <input
          type="text"
          className="input input-md input-bordered w-full"
          onChange={() => console.log("Custom input")}
        />
      ),
    },
  ];

  return (
    <div>
      <div className="flex    gap-3 text-on-dark">
        <div>Basic Input V1</div>
      </div>
      <form className="grid grid-cols-12 gap-6 mt-5">
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
      </form>
    </div>
  );
};

export default BasicInputPage;
