"use client";

import { ReactNode } from "react";

import HeaderComponent from "./header";
import SidebarComponent from "./sidebar";
import localFont from "next/font/local";
import { useThemeContext } from "@/app/context/theme-context";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function InitialLayout({ children }: { children: ReactNode }) {
  const { isDark } = useThemeContext();

  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased h-dvh flex flex-col`}
      data-theme={isDark ? "dark" : ""}
    >
      <HeaderComponent />
      <main className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto h-dvh">
        <SidebarComponent />
        <div className="p-4">{children}</div>
      </main>
    </body>
  );
}
