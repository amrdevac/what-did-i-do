"use client";
import { menuItems } from "@/app/data/sidebar-menu";
import { Cottage } from "@mui/icons-material";
import { useRouter } from "nextjs-toploader/app";
import React, { ChangeEvent, useEffect, useState } from "react";

const SidebarMenu = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    const darkMode = localStorage.getItem("dark-mode");
    document.documentElement.classList.remove("dark");
    if (darkMode == "true") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);
  return (
    <>
      <label className=" cursor-pointer flex justify-end space-y-5 pr-10 absolute right-10 -top-3">
        <span className="label-text"></span>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          checked={isDark}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (document.documentElement.classList.contains("dark")) {
              setIsDark(false);
              localStorage.setItem("dark-mode", "false");
              document.documentElement.classList.remove("dark");
            } else {
              setIsDark(true);
              localStorage.setItem("dark-mode", "true");
              document.documentElement.classList.add("dark");
            }
          }}
        />
      </label>
      <div className="flex  h-screen  p-10 gap-5 ">
        <div className="w-52  shadow-lg  rounded-lg border border-gray-50   overflow-hidden   bg-white bg-on-dark">
          {/* Header top sidebar */}
          <div className="   font-bold text-2xl   flex items-center  gap-2  bg-primary p-2 justify-between uppercase text-white">
            <Cottage fontSize="inherit" className="" />
            <div className=" text-sm">Helo</div>
          </div>
          {/* Short Profile */}
          <div className="h-40  border-b  bg-on-dark">
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
                      className="flex items-center gap-2  p-2 cursor-pointer select-none text-on-dark hover-on-dark"
                    >
                      {item.icon} {item.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" bg-white  dark:bg-slate-900 shadow-lg  rounded-xl w-full p-5">
          {children}
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
