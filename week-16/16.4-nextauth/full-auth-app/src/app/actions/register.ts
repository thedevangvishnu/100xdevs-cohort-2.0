"use server";

import { RegisterFormType, RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

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
    const verificationToken = await generateVerificationToken(email);

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Confirmation email sent!" };
  } else {
    return { error: "Invalid fields!" };
  }
};
