import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "../schemas";
import { getUserByNumber } from "../data/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { number, password } = validatedFields.data;

          const user = await getUserByNumber(number);

          if (user) {
            // check password
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
