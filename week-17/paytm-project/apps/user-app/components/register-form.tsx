"use client";

import { useRouter } from "next/navigation";

import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthButton } from "./auth-form/auth-button";
import { AuthCard } from "./auth-form/auth-card";
import { FormField } from "./auth-form/form-field";
import { RegisterFormType, RegisterSchema } from "../schemas";

import { useMutation } from "react-query";
import * as requests from "../hooks/requests";
import toast from "react-hot-toast";
import { MyToaster } from "./my-toaster";

export const RegisterForm = () => {
  const router = useRouter();

  const { mutate, isLoading } = useMutation(requests.register, {
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.success);
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    },
    onError: (e: Error) => {
      toast.error(e?.message);
    },
  });

  const form = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onFormSubmit = async (values: RegisterFormType) => {
    mutate(values);
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
              isLoading={isLoading}
            />

            <FormField
              icon={MdEmail}
              inputName="email"
              inputType="email"
              inputPlaceholder="abc@email.com"
              isLoading={isLoading}
            />

            <FormField
              icon={FaLock}
              inputName="password"
              inputType="password"
              inputPlaceholder="Password"
              isLoading={isLoading}
            />

            <AuthButton label="Sign up" type="submit" isLoading={isLoading} />
          </form>
        </FormProvider>
      </div>
      <div className="absolute right-6 bottom-6">
        <MyToaster />
      </div>
    </AuthCard>
  );
};
