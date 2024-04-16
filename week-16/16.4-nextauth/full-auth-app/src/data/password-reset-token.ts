import { db } from "@/lib/db";

export const getPasswordTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: { token },
    });

    if (!passwordResetToken) return null;

    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

export const getPasswordTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: { email },
    });

    if (!passwordResetToken) return null;

    return passwordResetToken;
  } catch (error) {
    return null;
  }
};
