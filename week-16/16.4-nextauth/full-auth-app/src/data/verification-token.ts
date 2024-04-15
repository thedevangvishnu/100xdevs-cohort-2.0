import { db } from "@/lib/db";

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verficationToken = db.verificationToken.findFirst({
      where: { email },
    });

    return verficationToken;
  } catch (error) {
    return null;
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verficationToken = db.verificationToken.findUnique({
      where: { token },
    });

    return verficationToken;
  } catch (error) {
    return null;
  }
};
