import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SidebarMenu from "@/components/SidebarMenu";
import NextTopLoader from "nextjs-toploader";
import { ChangeEvent } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const checkIsDark = localStorage.getItem("isDark")
  // console.log(checkIsDark)
  return (
  <html lang="en" data-theme="" id="main-layout">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-slate-100 dark:bg-slate-800 `}
      >
        <NextTopLoader
          color="#2563eb"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2563eb,0 0 5px #2563eb"
        />


        <SidebarMenu>{children}</SidebarMenu>
        {/* {children} */}
      </body>
    </html>
  );
}
