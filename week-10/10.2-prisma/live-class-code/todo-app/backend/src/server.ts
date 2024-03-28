import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/users.routes";
import todoRoutes from "./routes/todo.routes";

import "dotenv/config";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("asdfasdfasdf");
});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// all routes
app.use("/api/users", userRoutes);
app.use("/api/todos", todoRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}...`);
});
