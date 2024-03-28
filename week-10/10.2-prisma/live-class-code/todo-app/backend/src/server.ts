import express, { Request, Response } from "express";
import userRoutes from "./routes/users.routes";
import todoRoutes from "./routes/todo.routes";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("asdfasdfasdf");
});

app.use(express.json());

// all routes
app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}...`);
});
