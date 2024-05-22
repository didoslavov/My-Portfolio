import { type ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="hover:shadow-form rounded-md bg-wine px-8 py-3 text-lg font-semibold text-silver outline-none hover:bg-wine-700 dark:bg-sheen-gold dark:text-raisin-black dark:hover:bg-sheen-gold-500 md:mt-10">
      {children}
    </button>
  );
};

export default Button;
