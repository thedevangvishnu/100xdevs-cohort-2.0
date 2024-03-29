import { useState, useEffect } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

const API_URL = "http://localhost:3000";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getAllTodos = async () => {
      const response = await fetch(`${API_URL}/todos`);
      const todos = await response.json();
      console.log(todos);

      setTodos(todos);
    };

    getAllTodos();
  }, []);

  return (
    <div>
      <CreateTodo setTodos={setTodos} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
