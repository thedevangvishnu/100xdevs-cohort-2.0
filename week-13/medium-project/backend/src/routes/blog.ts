import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.post("/", async (c) => {
  const userId = c.get("userId");
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const newBlog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    const newBlogId = newBlog.id;

    c.status(201);
    return c.json({ message: "New blog created!", newBlogId });
  } catch (error) {
    c.status(500);
    return c.json({ message: "Something went wrong!" });
  }
});

blogRouter.put("/:id", async (c) => {
  const blogId = c.req.param("id");
  const body = await c.req.json();
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog = await prisma.blog.update({
      where: {
        id: blogId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
  } catch (error) {
    c.status(500);
    return c.json({ message: "Something went wrong!" });
  }
  return c.text("hello");
});

// add pagination
blogRouter.get("/", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blogs = await prisma.blog.findMany();

    c.status(200);
    return c.json({ message: "Found all blogs", blogs });
  } catch (error) {
    c.status(500);
    return c.json({ message: "Something went wrong!" });
  }
});

blogRouter.get("/:id", async (c) => {
  const blogId = c.req.param("id");
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog = await prisma.blog.findFirst({
      where: {
        id: blogId,
      },
    });

    c.status(200);
    return c.json({ message: "Found blog with id", blog });
  } catch (error) {
    c.status(500);
    return c.json({ message: "Something went wrong!" });
  }
});
