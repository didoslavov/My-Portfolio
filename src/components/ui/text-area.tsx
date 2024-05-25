import { type ComponentProps } from "react";
import { type FieldErrors, useForm, FieldValues, Path } from "react-hook-form";
import { cn } from "@/utils/cn";

type TextAreaProps<T extends FieldValues> = ComponentProps<"textarea"> & {
  register: ReturnType<typeof useForm<T>>["register"];
  errors: FieldErrors<T>;
  name: keyof T;
};

const TextArea = <T extends FieldValues>({
  register,
  errors,
  name,
  rows,
  placeholder,
  className,
}: TextAreaProps<T>) => {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className={cn(
        "w-full resize-none rounded-md border border-transparent bg-raisin-black bg-opacity-20 text-base text-raisin-black outline-none placeholder:text-taupe-gray focus:border-raisin-black focus:shadow-md dark:bg-silver dark:focus:border-sheen-gold",
        errors[name] && "outline-wine focus:border-none dark:outline-wine",
        className,
      )}
      {...register(name as Path<T>, { required: true })}
    ></textarea>
  );
};

export default TextArea;
