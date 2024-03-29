// Create routes related to CRUD on todos

import express, { Request, Response } from "express";
import * as Todo from "../model/todo.model";
import { verifyUser } from "../middlewares/user.middleware";

const router = express.Router();

router.post("/create", verifyUser, async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const user_id = req.userId;

    const newTodo = await Todo.createTodo({
      title: title,
      description: description,
      done: false,
      user_id: user_id,
    });
    const newTodoId = newTodo.id;

    return res.status(201).json({ message: "Created new todo!", newTodoId });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/", verifyUser, async (req: Request, res: Response) => {
  try {
    const todos = await Todo.getAllTodo(req.userId);
    return res.status(200).json({ message: "Found", todos });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
});

export default router;
