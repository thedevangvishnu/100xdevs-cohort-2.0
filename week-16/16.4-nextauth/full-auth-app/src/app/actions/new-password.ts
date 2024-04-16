"use server";

import { getPasswordTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { NewPasswordFormType, NewPasswordSchema } from "@/schemas";
import bcrypt from "bcryptjs";

export const newPassword = async (
  values: NewPasswordFormType,
  token?: string
) => {
  const validatedFields = NewPasswordSchema.safeParse(values);

  if (validatedFields.success) {
    const { password, confirmPassword } = validatedFields.data;

    if (password !== confirmPassword) {
      return { error: "Passwords do not match!" };
    }

    if (!token) {
      return { error: "Missing token!" };
    }

    const existingToken = await getPasswordTokenByToken(token);

    if (!existingToken) {
      return { error: "Couldn't find token!" };
    }

    const hasExpired = new Date() > new Date(existingToken.expires);

    if (hasExpired) {
      return { error: "Token has expired!" };
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser) {
      return { error: "Email does not exist!" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.update({
      where: { id: existingUser.id },
      data: {
        password: hashedPassword,
      },
    });

    // await db.passwordResetToken.delete({
    //   where: { id: existingToken.id },
    // });

    return { success: "Password updated!" };
  } else {
    return { error: "Invalid inputs!" };
  }
};
