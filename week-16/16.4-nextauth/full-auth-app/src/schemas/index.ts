import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
  password: z.string().min(1, {
    message: "Password is required!",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  email: z.string().email({ message: "Email is required!" }),
  password: z
    .string()
    .min(6, { message: "Password of 6 or more chars is needed!" }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Password of 6 or more chars is needed!",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password of 6 or more chars is needed!",
  }),
});

export type LoginFormType = z.infer<typeof LoginSchema>;
export type RegisterFormType = z.infer<typeof RegisterSchema>;
export type ResetFormType = z.infer<typeof ResetSchema>;
export type NewPasswordFormType = z.infer<typeof NewPasswordSchema>;
