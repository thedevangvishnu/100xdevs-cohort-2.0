"use client";

import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthButton } from "./auth-form/auth-button";
import { AuthCard } from "./auth-form/auth-card";
import { FormField } from "./auth-form/form-field";
import { RegisterFormType, RegisterSchema } from "../schemas";

export const RegisterForm = () => {
  const form = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onFormSubmit = async (values: RegisterFormType) => {
    const response = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const responseBody = await response.json();
    console.log(responseBody);
  };

  return (
    <AuthCard
      title="Register"
      description="Welcome! Create a new account."
      secondaryActionLabel="Already have an account? Sign in"
      secondaryActionLink="/auth/login"
    >
      <div className="w-[300px]">
        <FormProvider {...form}>
          <form
            action=""
            className="w-full flex flex-col px-3 md:px-0"
            onSubmit={form.handleSubmit(onFormSubmit)}
          >
            <FormField
              icon={FaUser}
              inputName="name"
              inputType="text"
              inputPlaceholder="Name"
            />

            <FormField
              icon={MdEmail}
              inputName="email"
              inputType="email"
              inputPlaceholder="abc@email.com"
            />

            <FormField
              icon={FaLock}
              inputName="password"
              inputType="password"
              inputPlaceholder="Password"
            />

            <AuthButton label="Sign up" type="submit" />
          </form>
        </FormProvider>
      </div>
    </AuthCard>
  );
};
