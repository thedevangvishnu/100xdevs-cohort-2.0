import { PrismaClient } from "@prisma/client/extension";

export * from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "productioin") globalThis.prisma = db;
