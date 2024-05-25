import { type ComponentProps } from "react";
import { type FieldErrors, useForm, FieldValues, Path } from "react-hook-form";
import { cn } from "@/utils/cn";

type InputProps<T extends FieldValues> = ComponentProps<"input"> & {
  register: ReturnType<typeof useForm<T>>["register"];
  errors: FieldErrors<T>;
  name: keyof T;
};

const Input = <T extends FieldValues>({
  register,
  errors,
  className,
  name,
  type,
}: InputProps<T>) => {
  return (
    <input
      type={type}
      placeholder="John Doe"
      className={`${cn("w-full rounded-md border border-transparent bg-raisin-black bg-opacity-20 px-6 pb-3 pt-2 text-base text-raisin-black outline-none placeholder:text-taupe-gray focus:border-raisin-black focus:shadow-md dark:bg-silver dark:focus:border-sheen-gold", className, errors.name && "border-wine")}`}
      {...register(name as Path<T>, { required: true })}
    />
  );
};

export default Input;
