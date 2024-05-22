import { type ContactFormData } from "@/app/contact/(components)/contact";
import { type ComponentProps } from "react";
import { type FieldErrors, useForm } from "react-hook-form";
import { cn } from "@/utils/cn";

type TextAreaProps = ComponentProps<"textarea"> & {
  register: ReturnType<typeof useForm<ContactFormData>>["register"];
  errors: FieldErrors<ContactFormData>;
  name: keyof ContactFormData;
};

const TextArea = ({
  register,
  errors,
  name,
  rows,
  placeholder,
}: TextAreaProps) => {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className={cn(
        "dark:focus:border-sheen-goldclassName w-full resize-none rounded-md border border-transparent bg-raisin-black bg-opacity-20 px-6 pb-3 pt-2 text-lg text-raisin-black outline-none placeholder:text-lg placeholder:text-taupe-gray focus:border-raisin-black focus:shadow-md dark:bg-silver",
        errors[name] && "border-wine",
      )}
      {...register(name, { required: true })}
    ></textarea>
  );
};

export default TextArea;
