"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { NewPasswordFormType, NewPasswordSchema } from "@/schemas";
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
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/app/actions/new-password";

export const NewPasswordForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<NewPasswordFormType>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onFormSubmit = (values: NewPasswordFormType) => {
    setError("");
    setSuccess("");

    if (!token) {
      setError("Missing token!");
      return;
    }

    if (values.password !== values.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      title="Reset"
      description="Create new password!"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
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

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
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

          <FormError message={error} />
          <FormSuccess message={success} />

          <Button type="submit" size="lg" className="w-full text-base">
            Reset password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
