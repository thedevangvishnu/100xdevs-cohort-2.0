// exporting all helper function related to user

import { PrismaClient } from "@repo/db/client";

const db = new PrismaClient();

export const getUserByNumber = async (number: number) => {
  try {
    const user = await db.user.findFirst({
      where: { number },
    });

    if (!user) return null;
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });

    if (!user) return null;
    return user;
  } catch (error) {
    return null;
  }
};
