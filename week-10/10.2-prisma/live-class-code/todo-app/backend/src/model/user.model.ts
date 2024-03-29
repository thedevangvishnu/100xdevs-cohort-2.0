import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type UserType = {
  email: string;
  firstName: string;
  lastName?: string;
  password: string;
};

export const createUser = async (user: UserType) => {
  try {
    const res = await prisma.user.create({
      data: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
      },
    });
    return res;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const getUser = async (email: string) => {
  try {
    const res = await prisma.user.findFirst({
      where: { email },
    });
    return res;
  } catch (error: any) {
    console.log("Error from model", error);
    throw new Error(error);
  }
};
