import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "../schemas";
import { getUserByEmail } from "../data/user";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user) return null;

          // check password
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) return null;

          return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
