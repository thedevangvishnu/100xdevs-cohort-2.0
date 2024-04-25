import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "../../../../schemas";
import { createNewUser, getUserByEmail } from "../../../../data/user";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validatedFields = RegisterSchema.safeParse(body);

  if (validatedFields.success) {
    const { name, email, password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use!" },
        { status: 401 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await createNewUser(name, email, hashedPassword);

    if (!newUser) {
      return NextResponse.json(
        { error: "Something went wrong!" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: "New user created!", userId: newUser.id },
      { status: 201 }
    );
  } else {
    return NextResponse.json({ error: "Inalid inputs!" }, { status: 400 });
  }
}
