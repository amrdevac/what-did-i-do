"use client";
import { lapanganFutsal } from "@/app/data/general-data";
import BasicTable, {
  ToolbarComponent,
} from "@/components/BasicTable/BasicTableV1";
import { Column, FrameData } from "@/components/BasicTable/FrameDataType";
import {
  CellWifiTwoTone,
  Close,
  Edit,
  EditTwoTone,
  MoreVert,
  UsbOffRounded,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import EditTableHeader from "./editTableHeader";

const BasicTablePage = () => {
  const frameData: FrameData = {
    data: [
      {
        col: "Lapangan",
        val: "nama_lapangan",
        type: "string",
        align: "center",
      },
      {
        col: "Jenis",
        val: "jenis_lapangan",
        type: "string",
        align: "center",
      },
      {
        col: "Lok",
        val: "lokasi",
        type: "string",
        align: "center",
      },
      {
        col: "Ukuran",
        val: "ukuran_lapangan",
        type: "string",
        align: "center",
      },
      {
        col: "Kapasitas",
        val: "kapasitas_pemain",
        type: "number",
        align: "center",
      },
      {
        col: "Fasilitas",
        substring: 10,
        val: "fasilitas",
        type: "string",
        align: "center",
      },
      {
        col: "Penyewaan",
        val: "data_penyewaan",
        type: "string",
        align: "center",
      },
      {
        col: "Waktu Operasional",
        val: "waktu_operasional",
        type: "string",
        align: "center",
      },
      {
        col: "Keterangan Lainnya",
        substring: 20,
        val: "keterangan_lainnya",
        type: "string",
        align: "center",
      },
    ],
    action: {
      th_name: <MoreVert />,
      list: [
        {
          name: "Edit",
          handler: (item: any) => console.log("Edit", item),
          icon: <i className="fas fa-edit text-green-500" />,
        },
        {
          name: "Delete",
          handler: (item: any) => console.log("Delete", item),
          icon: <i className="fas fa-trash text-red-500" />,
        },
      ],
    },
  };
  const [stateFrameData, setStateFrameData] = useState<FrameData>(frameData);
  const [frameDataOri, setFrameDataOri] = useState<FrameData>(frameData);

  const [stateRawData, setStateRawData] = useState<any[]>(lapanganFutsal);
  const [stateRawDataOri, setStateRawDataOri] = useState<any[]>(lapanganFutsal);
  const [isEditTableHeader, setIsEditTableHeader] = useState<boolean>(false);
  const [isEditRawData, setIsEditRawData] = useState<boolean>(false);

  const components: ToolbarComponent[] = [
    {
      name: "Table Header",
      onClick: () => setIsEditTableHeader(!isEditTableHeader),
      icon: <Edit fontSize="inherit" />,
    },
    {
      name: "Raw Data",
      onClick: () => setIsEditRawData(!isEditRawData),
      icon: <Edit fontSize="inherit" />,
    },
  ];

  const reformatTable = () => {
    let arrframData: FrameData = {
      data: [],
    };
    frameData.data = [];

    Object.entries(stateRawData).forEach(([key, objData]) => {
      if (key == "0") {
        Object.entries(objData).forEach(([vCol, kCol]) => {
          let objColData: Column = {
            align: "center",
            col: vCol,
            type: "string",
            val: vCol,
          };
          arrframData.data.push(objColData);
        });
      }
    });
    // frameData.data = arrframData
    setStateFrameData(arrframData);
    setFrameDataOri(arrframData);
  };
  const pretify = () => {
    setStateRawDataOri(JSON.parse(JSON.stringify(stateRawData, null, "\t")));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key == "Escape") {
        setIsEditTableHeader(false);
        setIsEditRawData(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.addEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex h-full  gap-4   relative  ">
      <div
        className={`fixed inset-0 h-screen bg-slate-700/80 transition-opacity duration-300 ${
          isEditTableHeader ? "opacity-100 z-10" : "opacity-0 -z-10"
        }`}
      >
        <div className="flex justify-center space-x-32 items-center h-full">
          <div></div>
          <div></div>
          <div></div>
          <div className="w-8/12 ">
            <div
              className="w-full tooltip tooltip-open tooltip-top"
              data-tip="Ubah Table Header dengan mudah"
            ></div>
            <BasicTable
              responsive={true}
              showNumbering={false}
              showToolbar={false}
              limit={1}
              data={stateRawData}
              componentTombol={components}
              frameData={stateFrameData}
            />
          </div>
        </div>
      </div>

      <div
        className={`fixed z-10 top-0 left-0 bottom-5 w-96 transform transition-transform duration-300 ${
          isEditTableHeader ? "translate-x-0" : "-translate-x-96"
        }`}
      >
        <EditTableHeader
          frameData={frameDataOri}
          isEditTableHeader={isEditTableHeader}
          setIsEditTableHeader={setIsEditTableHeader}
          setStateFrameData={setStateFrameData}
        />
      </div>

      <div
        className={`fixed z-10 top-0 left-0 bottom-5  transform transition-transform duration-300 ${
          isEditRawData ? "translate-x-0" : "-translate-x-full"
        }`}
      >
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
        <div className="h-full min-w-96  bg-slate-900   w-full overflow-y-scroll scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-gray-50 ">
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
              try {
                rawInvalid?.classList.add("hidden");
                setStateRawData(JSON.parse(textContent));
                reformatTable();
              } catch (error) {
                rawInvalid?.classList.remove("hidden");
              }
            }}
            className=" text-green-300 p-3 text-xs w-full  max-w-lg   min-h-full"
          >
            {JSON.stringify(stateRawDataOri, null, "\t")}
          </pre>
        </div>
      </div>

      <div className={"w-full"}>
        <div className="flex   gap-3">
          <div>Basic Table V1</div>
        </div>
        <BasicTable
          responsive={true}
          showToolbar={true}
          data={stateRawData}
          componentTombol={components}
          frameData={stateFrameData}
          showNumbering={true} // Opsi nomor urutan, bisa diatur true/false
          limit={10} // Opsi limit untuk jumlah item per halaman
          offset={0} // Opsi offset, bisa diatur sesuai kebutuhan
        />
      </div>
    </div>
  );
};

export default BasicTablePage;
