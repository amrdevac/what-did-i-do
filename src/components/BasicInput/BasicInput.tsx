"use client";

import React, { ChangeEvent, useEffect, useState } from "react";

export type InputChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLSelectElement
>;

interface SelectOption {
  label: string;
  value: string;
}

interface InputProps {
  label: string;
  id?: string;
  name?: string;
  value?: any;
  type: string;
  placeholder?: string;
  required?: boolean;
  grid?: number; // For grid system
  inputIcon?: React.ReactNode;
  labelIcon?: React.ReactNode;
  options?: SelectOption[]; // For select options
  selectedValue?: string; // For select
  custom?: React.ReactNode; // Custom input
  onChange?: (e: InputChangeEvent) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
const getColSpanClass = (grid: number): string => {
  if (grid < 1) return "col-span-1"; // minimal 1
  if (grid > 12) return "col-span-12"; // maksimal 12
  return `col-span-${grid}`;
};
const BasicInput: React.FC<InputProps> = ({
  label,
  id,
  name,
  value,
  type,
  placeholder,
  required = false,
  grid = 12,
  inputIcon,
  labelIcon,
  options = [],
  selectedValue,
  custom,
  onChange,
  onBlur,
}) => {
  const colSpanClasses = [
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "col-span-5",
    "col-span-6",
    "col-span-7",
    "col-span-8",
    "col-span-9",
    "col-span-10",
    "col-span-11",
    "col-span-12",
  ];

  const dataGrid = colSpanClasses[grid - 1] || "col-span-12";

  return (
    <div className={`form-group ${dataGrid}`}>
      <label htmlFor={id} className="block text-sm font-medium  text-on-dark">
        {labelIcon && <span className="mr-2">{labelIcon}</span>}
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      {type === "select" ? (
        <div className="relative mt-1">
          <select
            id={id}
            name={name}
            value={selectedValue}
            onChange={onChange}
            onBlur={onBlur}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm bg-white input-on-dark
            "
          >
            {options.map((option, idx) => (
              <option key={idx} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ) : type === "file" ? (
        <div className="relative mt-1">
          <input
            type="file"
            id={id}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm  input-on-dark"
          />
          {/* Preview for image */}
          {value && typeof value === "string" && (
            <img
              src={value}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover"
            />
          )}
        </div>
      ) : type === "custom" && custom ? (
        custom
      ) : (
        <div className="relative mt-1">
          {inputIcon && (
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              {inputIcon}
            </span>
          )}
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
            className={`block bg-white input-on-dark  w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm 
              ${inputIcon ? "pl-10" : ""}`}
          />
        </div>
      )}
    </div>
  );
};

export default BasicInput;
