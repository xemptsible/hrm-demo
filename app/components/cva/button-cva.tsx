import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(["transition-colors"], {
  variants: {
    style: {
      default: [
        "font-bold",
        "justify-center",
        "flex-shrink-0",
        "disabled:bg-gray-500",
        "hover:bg-primary",
        "hover:text-background",
        "dark:hover:text-foreground",
      ],
      highlight: ["disabled:bg-gray-500", "hover:text-accent"],
      block: [
        "disabled:bg-gray-500",
        "hover:bg-gray-300",
        "bg-primary",
        "text-background",
      ],
    },
    size: {
      default: ["p-2", "items-center"],
    },
  },
  defaultVariants: {
    style: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonVariants> &
  ComponentProps<"button">;

export function Button({
  style: type,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ style: type, size, className }))}
    />
  );
}
