const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://dv080499:hesPL31sebkUXATp@cluster0.vjkszou.mongodb.net/fullstack-todo-app"
);

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("todos", TodoSchema);

module.exports = {
  Todo,
};
