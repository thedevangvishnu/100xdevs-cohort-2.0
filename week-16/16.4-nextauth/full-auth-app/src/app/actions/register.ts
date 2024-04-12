import { RegisterFormType, RegisterSchema } from "@/schemas";

export const register = async (values: RegisterFormType) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields) {
    return { error: "Invalid fields!" };
  }

  return { success: "Verification email sent!" };
};
