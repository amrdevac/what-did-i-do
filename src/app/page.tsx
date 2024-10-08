"use client";
import { Cottage } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React from "react";
import { menuItems } from "./data/sidebar-menu";
import Image from "next/image";
import { Skill } from "@/data/cv";

export default function Home() {
  const router = useRouter();
  return (
    <div className=" overflow-y-scroll scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-gray-50">
      {/* <div className="flex flex-col items-center  justify-center h-screen ">
        <div className=" bg-white w-6/12  rounded-lg shadow-md relative h-3/6 overflow-hidden">
          <div className="bg-primary h-1/2 w-full"></div>
          <div className=" absolute inset-0 flex items-center left-10 gap-5 ">
            <div>
              <Image
                src="/img/me  .jpg"
                alt="Me"
                className="rounded-full bg-gray-500"
                width={150}
                height={150}
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="text-2xl text-white flex items-end  font-bold">
                <div>Fahmi amrullah</div>
              </div>
              <div className="text-slate-500 font-semibold flex flex-col gap-4 ">
                <div className="">Fullstak Developer</div>
                <div>
                  <div>
                    <div className="grid grid-cols-5 gap-2">
                      {Object.entries(Skill).map(([key, value]) => {
                        return (
                          <div
                            key={key}
                            className="bg-slate-200 text-center  text-sm rounded-full font-semibold p-0.5 hover:bg-primary hover:text-white duration-200 cursor-pointer"
                          >
                            {value.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-1/2  mx-auto text-justify text-xl   text-secondary italic ">
        {/* "Saya adalah seorang Fullstack Web Developer dengan kemampuan yang
        beragam. Saya percaya bahwa baik bekerja dalam tim maupun secara mandiri
        memiliki tantangan unik masing-masing. Setiap pengalaman dapat
        dikembangkan dalam setiap situasi. Membangun aplikasi bukanlah hal yang
        sulit, namun kemampuan berkomunikasi yang baik dapat membawa hasil kerja
        yang lebih rampung dan konkret. Proses evaluasi atas pengetahuan yang
        kita miliki sangatlah penting. Namun, saat dihadapkan pada "Conflict of
        Interest", kita harus dapat mengambil keputusan yang bijak untuk
        perusahaan maupun klien."" */}
      </div>
    </div>
  );
}
