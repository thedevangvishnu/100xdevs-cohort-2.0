// exporting all helper function related to user

import { PrismaClient } from "@repo/db/client";

const db = new PrismaClient();

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findFirst({
      where: { email },
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

export const createNewUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const user = await db.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};
