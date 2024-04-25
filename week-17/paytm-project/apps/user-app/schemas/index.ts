import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required!",
  }),
  email: z.string().email({
    message: "Valid email is required!",
  }),
  password: z.string().min(6, {
    message: "Password of min 6 characters is required!",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "A valid email is required!",
  }),
  password: z.string().min(1, {
    message: "Password is required!",
  }),
});

export type RegisterFormType = z.infer<typeof RegisterSchema>;
export type LoginFormType = z.infer<typeof LoginSchema>;
