const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./database/db");

const app = express();

app.use(express.json());

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  return res.status(200).json({ tooos: todos });
});

app.post("/todos", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    return res
      .status(411)
      .json({ error: "Invalid input properties and/or values" });
  }

  const { title, description } = createPayload;

  await Todo.create({
    title,
    description,
    completed: false,
  });

  return res.status(201).json({ message: "Todo created successfully" });
});

app.put("/completed", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = updateTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    return res
      .status(411)
      .json({ error: "Invalid input properties and/or values" });
  }

  // update the todo with this specific id
  await Todo.updateOne(
    {
      _id: createPayload.id,
    },
    {
      completed: true,
    }
  );

  return res.status(201).json({ message: "Todo updated successfully" });
});

app.listen(3000);
