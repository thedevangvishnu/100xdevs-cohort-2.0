"use server";

import { RegisterFormType, RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";

export const register = async (values: RegisterFormType) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (validatedFields.success) {
    const { email, password, name } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return { error: "Email already in use!" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    // implement "email verification"

    return { success: "User created!" };
  } else {
    return { error: "Invalid fields!" };
  }
};
