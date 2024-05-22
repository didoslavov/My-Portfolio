import { type ComponentProps, type SyntheticEvent } from "react";
import { type SubmitHandler } from "react-hook-form";
import { type ContactFormData } from "@/app/contact/(components)/contact";
import { cn } from "@/utils/cn";

type OmitOnSubmit<T> = Omit<T, "onSubmit">;

type FormProps = OmitOnSubmit<ComponentProps<"form">> & {
  onSubmit: SubmitHandler<ContactFormData>;
  handleSubmit: (
    callback: SubmitHandler<ContactFormData>,
  ) => (event?: SyntheticEvent) => Promise<void>;
};

const Form = ({ onSubmit, handleSubmit, children, className }: FormProps) => {
  return (
    <form className={cn(className)} onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  );
};

export default Form;
