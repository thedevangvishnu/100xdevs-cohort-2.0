"use client";

import { CardWrapper } from "./card-wrapper";

import { RegisterFormType, RegisterSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export const RegisterForm = () => {
  const form = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onFormSubmit = (values: RegisterFormType) => {
    console.log(values);
  };

  return (
    <CardWrapper
      title="Register"
      description="Create a new account"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account? Sign in"
      showSocial
    >
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onFormSubmit)}
          className="space-y-4"
        >
          <div className="flex flex-col">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Josh Brown" {...field} />
                  </FormControl>
                  <div className="h-[12px]  text-right">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="josh_brown@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <div className="h-[12px] text-right">
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
                    <Input type="password" placeholder="*********" {...field} />
                  </FormControl>
                  <div className="h-[12px] text-right ">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>

          <FormError message="" />
          <FormSuccess message="" />

          <Button type="submit" size="lg" className="w-full text-base ">
            Sign up
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
