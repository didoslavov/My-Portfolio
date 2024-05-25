import { cn } from "@/utils/cn";
import { type ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "hover:shadow-form rounded-md bg-wine font-semibold text-silver outline-none hover:bg-wine-700 dark:bg-sheen-gold dark:text-raisin-black dark:hover:bg-sheen-gold-500",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
