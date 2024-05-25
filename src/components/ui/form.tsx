import { type ComponentProps, type SyntheticEvent } from "react";
import { type SubmitHandler } from "react-hook-form";
import { cn } from "@/utils/cn";

type OmitOnSubmit<T> = Omit<T, "onSubmit">;

import { FieldValues } from "react-hook-form";

type FormProps<T extends FieldValues> = OmitOnSubmit<ComponentProps<"form">> & {
  onSubmit: SubmitHandler<T>;
  handleSubmit: (
    callback: SubmitHandler<T>,
  ) => (event?: SyntheticEvent) => Promise<void>;
};

const Form = <T extends FieldValues>({
  onSubmit,
  handleSubmit,
  children,
  className,
}: FormProps<T>) => {
  return (
    <form className={cn(className)} onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  );
};

export default Form;
