import { cva, VariantProps } from "class-variance-authority";

import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import Link from "next/link";

const sidebarVariants = cva(["text-foreground", "transition-colors"], {
  variants: {
    type: {
      default: ["disabled:bg-gray-500", "hover:bg-gray-300"],
      selected: ["bg-primary", "text-background"],
    },
    size: {
      default: ["flex", "px-4", "py-3", "gap-2"],
      icon: ["flex", "p-5", "gap-2"],
    },
  },
  defaultVariants: {
    type: "default",
    size: "default",
  },
});

type InitialProps = VariantProps<typeof sidebarVariants> & ComponentProps<"li">;

interface SidebarProps extends InitialProps {
  url: string;
  urlName: string;
  icon: JSX.Element;
}

export function SidebarItem({
  type,
  size,
  className,
  url = "",
  urlName,
  icon,
  ...props
}: SidebarProps) {
  return (
    <li {...props}>
      <Link
        href={url}
        className={twMerge(sidebarVariants({ type, size, className }))}
      >
        {icon}
        {urlName}
      </Link>
    </li>
  );
}
