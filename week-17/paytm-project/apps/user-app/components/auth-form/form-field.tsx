import { IconType } from "react-icons";
import { FormError } from "./form-error";

interface FormFieldProps {
  icon: IconType;
  iconSize?: string;
  inputType: string;
  inputPlaceholder: string;
  hasError?: boolean;
  errorMessage?: string;
}

export const FormField = ({
  icon: Icon,
  iconSize,
  inputType,
  inputPlaceholder,
  hasError,
  errorMessage,
}: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex items-center gap-2 border-b-2 border-slate-400 pb-2">
        {Icon && (
          <Icon
            className={`text-slate-500 ${iconSize ? `text-${iconSize}` : "text-base"}`}
          />
        )}
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          className="w-full bg-transparent border-none outline-none text-white"
        />
      </div>
      {/* error */}
      <div className="h-12 self-end">
        {hasError && errorMessage && <FormError error={errorMessage} />}
      </div>
    </div>
  );
};
