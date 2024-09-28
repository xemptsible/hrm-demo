import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(["transition-colors", "rounded"], {
  variants: {
    variant: {
      default: [
        "font-bold",
        "hover:bg-main",
        "justify-center",
        "flex-shrink-0",
        "disabled:bg-gray-500",
        "hover:bg-accent",
        "hover:text-background",
      ],
    },
    size: {
      default: ["p-2", "items-center"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonVariants> &
  ComponentProps<"button">;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ variant, size, className }))}
    />
  );
}
