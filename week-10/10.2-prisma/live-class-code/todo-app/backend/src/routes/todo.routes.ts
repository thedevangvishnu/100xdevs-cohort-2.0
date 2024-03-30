// Create routes related to CRUD on todos

import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import * as Todo from "../model/todo.model";
import { verifyUser } from "../middlewares/user.middleware";

const router = express.Router();

router.post(
  "/create",
  verifyUser,
  [
    check("title", "Title is required!").isString(),
    check("description", "Description is required!").isString(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    try {
      const { title, description } = req.body;
      const user_id = req.userId;

      const newTodo = await Todo.createTodo({
        title: title,
        description: description,
        done: false,
        user_id: user_id,
        created_at: new Date(),
      });
      const newTodoId = newTodo.id;

      return res.status(201).json({ message: "Created new todo!", newTodoId });
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong" });
    }
  }
);

router.get("/", verifyUser, async (req: Request, res: Response) => {
  try {
    const todos = await Todo.getAllTodo(req.userId);
    return res.status(200).json({ message: "Found", todos });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
});

router.put(
  "/:todoId",
  verifyUser,
  [
    check("title", "Title is required!").isString(),
    check("description", "Description is required!").isString(),
    check("done", "Description is required!").isBoolean(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    try {
      const todoId = Number(req.params.todoId);
      const userId = req.userId;
      const { title, description, done } = req.body;

      const todo = await Todo.getTodoById(userId, todoId);

      if (!todo) {
        return res.status(400).json({ message: "Invalid todo id!" });
      }

      const updatedTodo = await Todo.updateTodo(
        userId,
        todoId,
        title,
        description,
        done
      );

      return res
        .status(201)
        .json({ message: "Updated succesffully!", updatedTodo });
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong!" });
    }
  }
);

router.delete("/:todoId", verifyUser, async (req: Request, res: Response) => {
  try {
    const todoId = Number(req.params.todoId);
    const userId = req.userId;

    const todo = await Todo.getTodoById(userId, todoId);
    if (!todo) {
      return res.status(400).json({ message: "Invalid todo id!" });
    }

    const deleted = await Todo.deleteTodo(userId, todoId);

    return res.status(200).json({ message: "Todo deleted!", deleted });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
});

export default router;
