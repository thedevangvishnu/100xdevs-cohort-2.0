import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Todo 1",
      description: "Des 1",
    },
    {
      title: "Todo 2",
      description: "Des 2",
    },
    {
      title: "Todo 3",
      description: "Des 3",
    },
  ]);

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        title: "Todo 4",
        description: "Des 4",
      },
    ]);
  };

  return (
    <>
      <button onClick={addTodo}>Add todo</button>
      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.title}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </div>
    </>
  );
}

function Todo({ title, description }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}

export default App;
