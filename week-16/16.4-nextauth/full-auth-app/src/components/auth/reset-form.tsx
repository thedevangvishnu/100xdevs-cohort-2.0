"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { ResetFormType, ResetSchema } from "@/schemas";
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
import { reset } from "@/app/actions/reset";
import { useState, useTransition } from "react";

export const ResetForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<ResetFormType>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onFormSubmit = (values: ResetFormType) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      reset(values).then((data) => {
        setError(data?.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      title="Reset"
      description="Reset your password!"
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
