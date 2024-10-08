import { Column, FrameData } from "@/components/BasicTable/FrameDataType";
import { Close } from "@mui/icons-material";
import { useEffect } from "react";

const EditTableHeader = ({
  isEditTableHeader,
  setIsEditTableHeader,
  setStateFrameData,
  frameData,
}: {
  isEditTableHeader: boolean;
  setIsEditTableHeader: React.Dispatch<React.SetStateAction<boolean>>;
  setStateFrameData: React.Dispatch<React.SetStateAction<FrameData>>;
  frameData: FrameData;
}) => {
  return (
    <>
      <div className="flex justify-between p-3 bg-primary text-white">
        <div>Edit Table Header</div>
        <Close
          className="p-0.5 hover:bg-blue-400 rounded-full cursor-pointer transition-colors duration-200"
          onClick={() => setIsEditTableHeader(!isEditTableHeader)}
        />
      </div>
      <div className="h-full overflow-y-scroll scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-gray-50">
        <pre
          suppressContentEditableWarning={true}
          contentEditable={true}
          onInput={(e) => {
            const textContent =
              e.currentTarget.textContent?.replace(/;$/, "") || "";
            try {
              const columns: Column[] = JSON.parse(textContent);
              setStateFrameData({ data: columns });
            } catch (error) {
              console.error("Error parsing JSON:", error);
            }
          }}
          className="bg-slate-900 text-green-300 p-3 text-xs min-h-full"
        >
          {JSON.stringify(frameData.data, null, "\t")}
        </pre>
      </div>
      
    </>
  );
};

export default EditTableHeader;
