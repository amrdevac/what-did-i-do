"use client";
import { menuItems } from "@/app/data/sidebar-menu";
import { Cottage } from "@mui/icons-material";
import { useRouter } from 'nextjs-toploader/app';
import React from "react";


const SidebarMenu = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex  h-screen  p-10 gap-5 ">
        <div className="w-52  shadow-lg  rounded-lg border border-gray-50  overflow-hidden  bg-white">
          {/* Header top sidebar */}
          <div className="text-primary font-bold text-2xl   flex items-center  gap-2  bg-primary p-2 justify-between uppercase">
            <Cottage fontSize="inherit" className="text-base-100" />
            <div className="text-base-100 text-sm">Helo</div>
          </div>
          {/* Short Profile */}
          <div className="h-40  border-b">
            <Cottage fontSize="inherit" className="text-base-100" />
            <div className="text-base-100 text-sm">Helo</div>
          </div>
          {/* What i do */}
          <div className="text-sm">
            <div className="font-bold uppercase  text-primary mt-2 p-2">
              What i do
            </div>

            <div className="flex flex-col">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.url === "#" ? (
                    <div className="">
                      <div className="font-bold px-2 py-1 text-sm text-secondary">
                        {item.label}
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => router.push(item.url)}
                      className="flex items-center gap-2 text-neutral p-2 cursor-pointer hover:bg-gray-100 duration-150 select-none"
                    >
                      {item.icon} {item.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" bg-white shadow-lg  rounded-xl w-full p-5">
          {children}
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
