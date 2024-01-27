const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express();

app.use(express.json());

app.get("/todos", (req, res) => {
  res.send("Hello...");
});

app.post("/todos", (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    return res
      .status(411)
      .json({ error: "Invalid input properties and/or values" });
  } else {
    // push to mongodb
  }
});

app.put("/completed", (req, res) => {
  const createPayload = req.body;
  const parsePayload = updateTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    return res
      .status(411)
      .json({ error: "Invalid input properties and/or values" });
  } else {
    // update the todo with this specific id
  }
});

app.listen(3000);
