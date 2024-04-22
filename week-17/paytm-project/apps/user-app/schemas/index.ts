import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required!",
  }),
  number: z.number().min(10, {
    message: "A number of min 10 digits is required!",
  }),
  password: z.string().min(1, {
    message: "This field is required!",
  }),
});

export const LoginSchema = z.object({
  number: z.number().min(10, {
    message: "A number of min 10 digits is required!",
  }),
  password: z.string().min(1, {
    message: "This field is required!",
  }),
});

export type RegisterFormType = z.infer<typeof RegisterSchema>;
export type LoginFormType = z.infer<typeof LoginSchema>;
