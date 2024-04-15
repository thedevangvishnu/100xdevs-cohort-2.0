"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { LoginFormType, LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/app/actions/login";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with other provider!"
      : "";

  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onFormSubmit = (values: LoginFormType) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      title="Login"
      description="Welcome back"
      backButtonLabel="Don't have an account? Sign up"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onFormSubmit)}
          className="space-y-4"
        >
          <div className="flex flex-col ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="josh_brown@gmail.com"
                      disabled={isPending}
                    />
                  </FormControl>
                  <div className="h-[10px] text-right text-xs">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="******"
                      disabled={isPending}
                    />
                  </FormControl>
                  <div className="h-[10px] text-right text-xs">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>

          <FormError message={error || urlError} />
          <FormSuccess message={success} />

          <Button type="submit" size="lg" className="w-full text-base">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
