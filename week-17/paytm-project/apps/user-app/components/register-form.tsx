"use client";

import { FaU, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import { AuthButton } from "./auth-form/auth-button";
import { AuthCard } from "./auth-form/auth-card";
import { FormError } from "./auth-form/form-error";
import { FormField } from "./auth-form/form-field";

export const RegisterForm = () => {
  return (
    <AuthCard
      title="Register"
      description="Welcome! Create a new account."
      secondaryActionLabel="Already have an account? Sign in"
      secondaryActionLink="/auth/login"
    >
      <div className="w-[300px]">
        <form action="" className="w-full flex flex-col px-3 md:px-0">
          <FormField
            icon={FaUser}
            inputType="text"
            inputPlaceholder="Name"
            hasError
            errorMessage="This field is required!"
          />

          <FormField
            icon={MdEmail}
            inputType="email"
            inputPlaceholder="Email"
            hasError
            errorMessage="This field is required!"
          />

          <FormField
            icon={FaLock}
            inputType="password"
            inputPlaceholder="Password"
            hasError
            errorMessage="This field is required!"
          />

          <AuthButton label="Sign up" onClick={() => {}} />
        </form>
      </div>
    </AuthCard>
  );
};
