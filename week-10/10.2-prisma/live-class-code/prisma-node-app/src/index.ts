import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
    },
  });

  console.log(res);
}

insertUser("one@example.com", "one@1234", "oneFirst", "oneLast");
insertUser("two@example.com", "two@1234", "twoFirst", "twoLast");
