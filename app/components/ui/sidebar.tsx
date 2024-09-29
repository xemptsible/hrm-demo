"use client";

import { usePathname } from "next/navigation";
import { SidebarItem } from "../cva/sidebar-cva";
import {
  SidebarProvider,
  useSidebarContext,
} from "@/app/context/sidebar-context";
import {
  LayoutDashboard,
  Users,
  TreePalm,
  CircleDollarSign,
  FlaskRound,
} from "lucide-react";

export default function SidebarComponent() {
  const { isSmall, isVisible } = useSidebarContext();

  return (
    <aside
      className={`bg-white ${isVisible ? "hidden" : "flex"} flex-col shadow-lg`}
    >
      <nav className="top-0 inset-0 sticky">
        <ul>
          <SidebarItemFull
            url={"/"}
            urlName={"Dashboard"}
            icon={<LayoutDashboard />}
          />
          <SidebarItemFull
            url={"/employee"}
            urlName={"Employees"}
            icon={<Users />}
          />
          <SidebarItemFull
            url={"/leave"}
            urlName={"Leaves"}
            icon={<TreePalm />}
          />
          <SidebarItemFull
            url={"/payroll"}
            urlName={"Payroll"}
            icon={<CircleDollarSign />}
          />
          <SidebarItemFull
            url={"/experiment"}
            urlName={"Experiment"}
            icon={<FlaskRound />}
          />
        </ul>
      </nav>
    </aside>
  );
}

export function SidebarItemFull({
  url,
  urlName,
  className,
  icon,
}: {
  url: string;
  urlName: string;
  className?: string;
  icon: JSX.Element;
}) {
  const { isSmall } = useSidebarContext();

  const pathname = usePathname();

  return (
    <SidebarItem
      type={pathname === url ? "selected" : "default"}
      url={url}
      urlName={isSmall ? urlName : ""}
      className={isSmall ? `${className} w-[16rem]` : `${className}`}
      icon={icon}
    />
  );
}
