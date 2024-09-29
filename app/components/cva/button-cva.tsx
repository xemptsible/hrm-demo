import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(["transition-colors"], {
  variants: {
    type: {
      default: [
        "font-bold",
        "justify-center",
        "flex-shrink-0",
        "disabled:bg-gray-500",
        "hover:bg-primary",
        "hover:text-background",
      ],
    },
    size: {
      default: ["p-2", "items-center"],
    },
  },
  defaultVariants: {
    type: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonVariants> &
  ComponentProps<"button">;

export function Button({ type, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ type, size, className }))}
    />
  );
}
