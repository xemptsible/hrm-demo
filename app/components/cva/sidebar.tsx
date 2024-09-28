import { cva, VariantProps } from "class-variance-authority";

import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import Link from "next/link";

const sidebarVariants = cva(["rounded", "text-foreground"], {
  variants: {
    variant: {
      default: [
        "disabled:bg-gray-500",
        "hover:bg-primary",
        "hover:text-background",
      ],
      selected: [
        "bg-accent",
        "hover:bg-primary",
        "hover:text-background",
        "text-background",
      ],
    },
    size: {
      default: ["flex", "p-2", "gap-2"],
    },
  },
  defaultVariants: {
    variant: "default",
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
  variant,
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
        className={twMerge(sidebarVariants({ variant, size, className }))}
      >
        {icon}
        {urlName}
      </Link>
    </li>
  );
}
