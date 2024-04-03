import { NextRequest, NextResponse } from "next/server";
import client from "@/app/libs/prismadb";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, password } = body;
  let user = await client.user.findFirst({
    where: { email },
  });

  if (user) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  user = await client.user.create({
    data: { name, email, password },
  });

  const userId = user.id;

  return NextResponse.json(
    { message: "User created!", userId, name },
    { status: 201 }
  );
}

// export async function GET() {
//   const user = await client.user.findFirst({});
//   return NextResponse.json({ email: user?.email, name: user?.name });
// }
