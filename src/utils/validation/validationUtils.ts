import useValidationStore from "./validationStore";

export const errBorder = (name: string) => {
  const validationStore = useValidationStore.getState();
  return name in validationStore.validation
    ? "border border-red-500 dark:border-red-500"
    : "";
};
