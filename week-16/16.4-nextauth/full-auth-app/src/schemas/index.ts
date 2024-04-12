import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginFormType = z.infer<typeof LoginSchema>;
