import NextAuth from "next-auth";
import { db } from "@repo/db/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";

export const authHandler = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
});
