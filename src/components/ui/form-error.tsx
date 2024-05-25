import { FieldValues, FieldErrors } from "react-hook-form";

type FormErrorProps<T extends FieldValues> = {
  errors: FieldErrors<T>;
  field: keyof T;
};

const FormError = <T extends FieldValues>({
  errors,
  field,
}: FormErrorProps<T>) => {
  return (
    <p className="dark:text-wine-100 font-concert text-sm text-wine">
      {errors[field]!.message as string}
    </p>
  );
};

export default FormError;
