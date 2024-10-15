"use client";
import { menuItems } from "@/app/data/sidebar-menu";
import BasicLoading from "@/store/ConfirmDialog/Components/ConfirmLoading";
import { Cottage, GitHub, LinkedIn } from "@mui/icons-material";
import Image from "next/image";
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
          <div className="h-40  border-b  bg-on-dark text-center flex items-center justify-center flex-col   gap-4">
            {/* <Image
              src={
                "https://media.licdn.com/dms/image/v2/C4E03AQH51UzIQp50iA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1653062416024?e=1734566400&v=beta&t=2UKqCjEgOK4XVPdhBvCLeSwRF7Px5AvBHJQo8e0M0DE "
              }
              alt="profil-image"
              width={50}
              height={50}
              className="rounded-full"
            /> */}
            <div className="text-on-dark">
              <div className="text-base-100 text-sm text-on-dark">Fahmi Amrullah</div>
              <div className="flex justify-center items-center gap-2">
                <div
                  className="text-primary cursor-pointer "
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/fahmi-amrullah-36806b1a0/"
                    );
                  }}
                >
                  <LinkedIn fontSize="inherit"  />
                </div>
                <div className="text-primary cursor-pointer "
                onClick={()=>{
                  window.open("https://github.com/amrdevac")
                }}  
                >
                  <GitHub fontSize="inherit" />
                </div>
              </div>
            </div>
          </div>
          {/* What i do */}
          <div className="text-sm">
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
