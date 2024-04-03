import { PrismaClient } from "@prisma/client";

console.log("inside db.ts");

const prismaClientSingleton = () => {
  console.log("inside signleton function");

  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const client = globalThis.prisma ?? prismaClientSingleton();

export default client;

if (process.env.NODE_ENV !== "production") {
  console.log("inside if block");
  globalThis.prisma = client;
}
