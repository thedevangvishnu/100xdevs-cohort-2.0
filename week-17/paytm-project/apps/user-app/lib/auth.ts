import NextAuth from "next-auth";
import { PrismaClient } from "@repo/db/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";

const db = new PrismaClient();

export const authHandler = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
  },
});
