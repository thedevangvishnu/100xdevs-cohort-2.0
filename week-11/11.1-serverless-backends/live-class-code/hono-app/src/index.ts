import { Hono } from "hono";

const app = new Hono();

async function authMiddleware(c: any, next: any) {
  if (c.req.header("Authorization")) {
    // Do validation
    await next();
  } else {
    return c.text("You dont have access");
  }
}

app.post("/", authMiddleware, async (c) => {
  const body = await c.req.json();
  console.log("body", body);
  console.log("Auth header", c.req.header("Authorization"));
  console.log("Query param", c.req.query("param"));

  return c.text("Hello Hono!");
});

export default app;
