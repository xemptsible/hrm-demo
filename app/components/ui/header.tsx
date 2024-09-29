/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ChevronFirst,
  ChevronLast,
  Moon,
  Sun,
  UserCircle2,
} from "lucide-react";
import { Button } from "../cva/button-cva";

import Link from "next/link";
import { useSidebarContext } from "@/app/context/sidebar-context";
import { useThemeContext } from "@/app/context/theme-context";

export default function HeaderComponent() {
  const { isCollapsed, toggle } = useSidebarContext();
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <header className="flex items-center justify-between sticky p-2 bg-secondary ">
      <div className="flex items-center">
        <Button onClick={toggle} className="text-black">
          {!isCollapsed ? <ChevronFirst /> : <ChevronLast />}
        </Button>
        <Link href={"/"}>
          <img
            src={"/logo.png"}
            alt={"Quoc Bao Software Ltd. Logo"}
            width={"240"}
            height={"auto"}
            className="object-contain"
          />
        </Link>
      </div>
      <div className="flex">
        <Button className="text-black" onClick={toggleTheme}>
          {isDark ? <Moon /> : <Sun />}
        </Button>
        <Button className="text-black">
          <UserCircle2 />
        </Button>
      </div>
    </header>
  );
}
