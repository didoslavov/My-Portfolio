import type { FieldValues, FieldErrors } from "react-hook-form";

type FormErrorProps<T extends FieldValues> = {
  errors: FieldErrors<T>;
  field: keyof T;
};

const FormError = <T extends FieldValues>({
  errors,
  field,
}: FormErrorProps<T>) => {
  return (
    <p className="font-concert text-sm text-wine dark:text-wine-100">
      {errors[field]!.message as string}
    </p>
  );
};

export default FormError;
