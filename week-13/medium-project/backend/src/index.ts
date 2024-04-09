import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import bcrypt from "bcryptjs";
import { decode, sign, verify } from "hono/jwt";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

app.use("/api/v1/blog/*", async (c, next) => {
  const token = c.req.header("Authorization");

  if (!token) {
    c.status(401);
    return c.json({ message: "Unauthorized!" });
  }

  try {
    const payload = await verify(token, c.env.JWT_SECRET);

    if (!payload) {
      c.status(401);
      return c.json({ message: "Unauthorized!" });
    }

    c.set("userId", payload.id);
    await next();
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({ message: "Something went wrong!" });
  }
});

app.get("/", (c) => {
  return c.text("Hello world!");
});

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;
