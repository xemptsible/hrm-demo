"use client";

import { SidebarProvider } from "@/app/context/sidebar-context";
import { ReactNode } from "react";
import { ThemeProvider } from "@/app/context/theme-context";

import InitialLayout from "./intialLayout";

export default function ContextWrapper({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <InitialLayout children={children} />
      </ThemeProvider>
    </SidebarProvider>
  );
}
