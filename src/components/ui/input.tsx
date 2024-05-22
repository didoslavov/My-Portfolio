import { type ContactFormData } from "@/app/contact/(components)/contact";
import { type ComponentProps } from "react";
import { type FieldErrors, useForm } from "react-hook-form";
import { cn } from "@/utils/cn";

type InputProps = ComponentProps<"input"> & {
  register: ReturnType<typeof useForm<ContactFormData>>["register"];
  errors: FieldErrors<ContactFormData>;
  name: keyof ContactFormData;
};

const Input = ({ register, errors, className, name, type }: InputProps) => {
  return (
    <input
      type={type}
      placeholder="John Doe"
      className={`${cn("w-full rounded-md border border-transparent bg-raisin-black bg-opacity-20 px-6 pb-3 pt-2 text-base text-raisin-black outline-none placeholder:text-lg placeholder:text-taupe-gray focus:border-raisin-black focus:shadow-md dark:bg-silver dark:focus:border-sheen-gold", className, errors.name && "border-wine")}`}
      {...register(name, { required: true })}
    />
  );
};

export default Input;
