import { type ContactFormData } from "@/app/contact/(components)/contact";
import { type FieldErrors } from "react-hook-form";

type FormErrorProps = {
  errors: FieldErrors<ContactFormData>;
  field: keyof ContactFormData;
};

const FormError = ({ errors, field }: FormErrorProps) => {
  return (
    <p className="font-concert text-sm text-wine">
      {errors && errors[field]?.message}
    </p>
  );
};

export default FormError;
