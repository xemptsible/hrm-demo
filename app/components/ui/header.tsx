"use client";

import { ChevronFirst, ChevronLast } from "lucide-react";
import { Button } from "../cva/button-cva";

import Link from "next/link";
import { useSidebarContext } from "@/app/context/sidebar-context";

export default function HeaderComponent() {
  const { isSmall, isVisible, close, toggle } = useSidebarContext();

  return (
    <header className="bg-secondary top-0 sticky p-2">
      <div className="flex items-center">
        <Button onClick={toggle}>
          {!isVisible ? <ChevronFirst /> : <ChevronLast />}
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
    </header>
  );
}
