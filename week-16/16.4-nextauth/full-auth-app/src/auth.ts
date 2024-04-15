import NextAuth, { type DefaultSession } from "next-auth";

import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { getUserById } from "@/data/user";
import { UserRole } from "@prisma/client";

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      console.log({ existingUser });
      if (!existingUser) return token;

      token.role = existingUser.role;
      return token;
    },
    async session({ token, session }) {
      console.log({
        session: token,
      });

      if (session.user && token.sub) {
        session.user.id = token.sub;
      }

      if (session.user && token.role) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
});
