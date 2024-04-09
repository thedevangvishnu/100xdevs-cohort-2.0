import { z } from "zod";

export const signupInput = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
});

export const updateBlogInput = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  boolean: z.string().optional(),
});

export type SignupInputType = z.infer<typeof signupInput>;

export type SigninInputType = z.infer<typeof signinInput>;

export type CreateBlogType = z.infer<typeof createBlogInput>;

export type UpdateBlogType = z.infer<typeof updateBlogInput>;
