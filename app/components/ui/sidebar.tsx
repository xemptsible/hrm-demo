"use client";

import { usePathname } from "next/navigation";
import { SidebarItem } from "../cva/sidebar-cva";
import { useSidebarContext } from "@/app/context/sidebar-context";
import {
  LayoutDashboard,
  Users,
  TreePalm,
  CircleDollarSign,
} from "lucide-react";
import { useThemeContext } from "@/app/context/theme-context";

export default function SidebarComponent() {
  const { isDark } = useThemeContext();

  return (
    <aside
      className={`${
        !isDark ? "bg-background" : "bg-slate-600"
      } flex flex-col shadow-lg`}
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
  const { isCollapsed } = useSidebarContext();

  const pathname = usePathname();

  return (
    <SidebarItem
      type={pathname === url ? "selected" : "default"}
      url={url}
      urlName={!isCollapsed ? urlName : ""}
      className={!isCollapsed ? `${className} w-[16rem]` : `${className}`}
      icon={icon}
    />
  );
}
