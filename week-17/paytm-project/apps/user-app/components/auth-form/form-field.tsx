"use client";

import { IconType } from "react-icons";
import { FormError } from "./form-error";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  icon: IconType;
  iconSize?: string;
  inputName: string;
  inputType: string;
  inputPlaceholder: string;
}

export const FormField = ({
  icon: Icon,
  iconSize,
  inputName,
  inputType,
  inputPlaceholder,
}: FormFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
          {...register(inputName, { required: true })}
        />
      </div>
      {/* error */}
      <div className="h-12 self-end">
        {errors[inputName] && (
          <FormError error={errors[inputName]?.message as string} />
        )}
      </div>
    </div>
  );
};
