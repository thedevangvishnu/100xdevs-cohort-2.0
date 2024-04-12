"use server";

import { LoginFormType, LoginSchema } from "@/schemas";

export const login = async (values: LoginFormType) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields) {
    return { error: "Invalid fields!" };
  }

  return { success: "Login success!" };
};
