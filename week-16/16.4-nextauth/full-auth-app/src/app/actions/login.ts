"use server";

import { LoginFormType, LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: LoginFormType) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (validatedFields.success) {
    const { email, password } = validatedFields.data;

    try {
      await signIn("credentials", {
        email,
        password,
        redirectTo: DEFAULT_LOGIN_REDIRECT,
      });
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return { error: "Invalid Credentials" };
          default:
            return { error: "Something went wrong!" };
        }
      }
      throw error;
    }
  } else {
    return { error: "Invalid fields!" };
  }

  // Todo: return success after 2FA
};
