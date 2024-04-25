import { NextRequest, NextResponse } from "next/server";
import { LoginSchema } from "../../../../schemas";
import { getUserByEmail } from "../../../../data/user";
import { authHandler } from "../../../../lib/auth";
import { AuthError } from "next-auth";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validatedFields = LoginSchema.safeParse(body);

  if (validatedFields.success) {
    const { email, password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
      return NextResponse.json(
        { error: "Invalid credentials!" },
        { status: 401 }
      );
    }

    try {
      await authHandler.signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      return NextResponse.json(
        { success: "Login successfull!" },
        { status: 200 }
      );
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return NextResponse.json(
              { error: "Invalid credentials!" },
              { status: 401 }
            );
          default:
            return NextResponse.json(
              { error: "Something went wrong!" },
              { status: 500 }
            );
        }
      }
      throw error;
    }
  } else {
    return NextResponse.json({ error: "Invalid inputs!" }, { status: 400 });
  }
}
