import { Column, FrameData } from "@/components/BasicTable/FrameDataType";
import Resizable from "@/components/ResizeableProps";
import { Close } from "@mui/icons-material";
import { useEffect } from "react";

const EditRawData = ({
  isEditRawData,
  setIsEditRawData,
  setStateRawData,
  stateRawDataOri,
  reformatTable,
  pretify,
}: {
  isEditRawData: boolean; // Tambahkan parameter ini
  setIsEditRawData: React.Dispatch<React.SetStateAction<boolean>>;
  setStateRawData: React.Dispatch<React.SetStateAction<any[]>>;
  stateRawDataOri: any; // Parameter untuk stateRawDataOri
  reformatTable: () => void; // Parameter untuk fungsi reformatTable
  pretify: () => void; // Parameter untuk fungsi reformatTable
}) => {
  return (
    <>
      <div
        className={`fixed z-10 top-0 left-0 bottom-5  transform transition-transform duration-300 ${
          isEditRawData ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Resizable defaultWidth={500}>
          <div className="flex justify-between p-3 bg-primary text-white items-center">
            <div>Edit Raw Data</div>
            <div>
              <button
                className="btn btn-sm  border-white text-white rounded-lg  btn-outline"
                onClick={() => pretify()}
              >
                Pretify JSON
              </button>
            </div>
            <Close
              className="p-0.5 hover:bg-blue-400 rounded-full cursor-pointer transition-colors duration-200"
              onClick={() => setIsEditRawData(!isEditRawData)}
            />
          </div>
          <div className="h-[98vh] overflow-y-scroll scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-gray-50">
            <div
              className=" z-10 bg-red-500 text-white w-full text-center right-0 left-0  hidden"
              id="raw-invalid-json"
            >
              JSON tidak valid
            </div>
            <pre
              suppressContentEditableWarning={true}
              contentEditable={true}
              onInput={(e) => {
                const rawInvalid = document.getElementById("raw-invalid-json");
                const textContent =
                  e.currentTarget.textContent?.replace(/;$/, "") || "";
                console.log(e.currentTarget.textContent);
                try {
                  rawInvalid?.classList.add("hidden");
                  setStateRawData(JSON.parse(textContent));
                } catch (error) {
                  rawInvalid?.classList.remove("hidden");
                }
              }}
              className=" text-green-300 p-3 text-xs w-full  max-w-lg   min-h-full"
            >
              {JSON.stringify(stateRawDataOri, null, "\t")}
            </pre>
          </div>
        </Resizable>
      </div>
    </>
  );
};

export default EditRawData;
