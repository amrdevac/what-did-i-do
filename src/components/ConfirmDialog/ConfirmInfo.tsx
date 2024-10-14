"use client";
import useConfirmInfoStore from "@/store/ConfirmDialog/useConfirmInfoStore";
import { useConfirmationStore } from "../../store/ConfirmDialog/useConfirmDialogStore";
import { ChevronLeft, Error } from "@mui/icons-material";
import dd from "@/utils/dd/dd";

export const ConfirmInfo = () => {
  const mainStore = useConfirmationStore();
  const errorMatrix = mainStore.errorMatrix;

  const infoStore = useConfirmInfoStore();
  return (
    <>
      <dialog
        id={"confirm-info"}
        className="modal modal-bottom sm:modal-middle dark:text-white "
      >
        <div className="modal-box bg-white dark:bg-slate-800 text-center flex flex-col gap-3 justify-center items-center">
          <h3 className="font-bold text-lg">Info</h3>
          <Error fontSize="large" className="text-warning" />
          <p className=" first-letter:capitalize">{infoStore.info.errorMsg}</p>
          {infoStore.info.errorObj &&
            errorMatrix &&
            infoStore.info.errorObj[errorMatrix.colError] && (
              <div className="collapse text-xs w-full text-left">
                <input type="checkbox" className="h-0" />
                <div className="  collapse-title flex justify-between w-full   cursor-pointer  ">
                  <div className=" self-start">Detail Info</div>
                  <ChevronLeft className="-rotate-90" fontSize="inherit" />
                </div>
                {errorMatrix.typeError == "looping" && (
                  <div className="collapse-content -mt-2 text-red-300">
                    {infoStore.info.errorObj[errorMatrix.colError] &&
                      Object.entries(
                        infoStore.info.errorObj[errorMatrix.colError]
                      ).map(([key, value]: any) => {
                        return (
                          <div key={key}>{value[errorMatrix.objColError]}</div>
                        );
                      })}
                  </div>
                )}
              </div>
            )}
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn btn-primary bg-on-dark btn-sm text-white "
                onClick={() => {
                  const selfModal = document.getElementById(
                    "confirm-info "
                  ) as HTMLDialogElement;
                  if (selfModal) {
                    selfModal.close();
                  }
                }}
              >
                Tutup
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
