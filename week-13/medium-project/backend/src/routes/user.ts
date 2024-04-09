import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import bcrypt from "bcryptjs";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  let user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user) {
    c.status(400);
    return c.json({ message: "User already exists!" });
  }

  body.password = await bcrypt.hash(body.password, 10);

  user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.email,
      password: body.password,
    },
  });

  const token = await sign({ userId: user.id }, c.env.JWT_SECRET);
  c.status(201);
  return c.json({ message: "Signup successfull!", token });
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    c.status(401);
    return c.json({ message: "Invalid credentials!" });
  }

  const isMatch = await bcrypt.compare(body.password, user.password);
  if (!isMatch) {
    c.status(401);
    return c.json({ message: "Invalid credentials!" });
  }

  const token = await sign({ userId: user.id }, c.env.JWT_SECRET);

  c.status(200);
  return c.json({ message: "Login successfull!", token });
});
