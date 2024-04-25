"use client";

import { useRouter } from "next/navigation";

import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthButton } from "./auth-form/auth-button";
import { AuthCard } from "./auth-form/auth-card";
import { FormField } from "./auth-form/form-field";
import { LoginFormType, LoginSchema } from "../schemas";

import { useMutation } from "react-query";
import * as requests from "../hooks/requests";
import toast from "react-hot-toast";
import { MyToaster } from "./my-toaster";

export const LoginForm = () => {
  const router = useRouter();

  const { mutate, isLoading } = useMutation(requests.login, {
    onSuccess: (data) => {
      toast.success(data.success);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    },
    onError: (e: Error) => {
      toast.error(e?.message);
    },
  });

  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onFormSubmit = async (values: LoginFormType) => {
    mutate(values);
  };

  return (
    <AuthCard
      title="Login"
      description="Welcome back! Enter credentials."
      secondaryActionLabel="Don't have an account? Sign up"
      secondaryActionLink="/auth/register"
    >
      <div className="w-[300px]">
        <FormProvider {...form}>
          <form
            action=""
            className="w-full flex flex-col px-3 md:px-0"
            onSubmit={form.handleSubmit(onFormSubmit)}
          >
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

            <AuthButton label="Sign in" type="submit" isLoading={isLoading} />
          </form>
        </FormProvider>
      </div>
      <div className="absolute right-6 bottom-6">
        <MyToaster />
      </div>
    </AuthCard>
  );
};
