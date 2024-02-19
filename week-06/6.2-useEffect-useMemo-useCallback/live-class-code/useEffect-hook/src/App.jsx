import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [id, setId] = useState(1);

  const todoIds = [1, 2, 3, 4, 5];

  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   fetch("https://sum-server.100xdevs.com/todos").then(async (response) => {
  //     const data = await response.json();
  //     setTodos(data.todos);
  //   });
  // }, []);

  return (
    <div>
      {/* {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))} */}
      <div style={{ display: "flex", gap: "1rem" }}>
        {todoIds.map((itemId) => (
          <Button id={itemId} onClick={() => setId(itemId)} />
        ))}
      </div>
      <TodoById id={id} />
    </div>
  );
}

// function Todo({ todo }) {
//   return (
//     <div>
//       <h2>{todo.title}</h2>
//       <p>{todo.description}</p>
//     </div>
//   );
// }

function TodoById({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`).then(
      async (response) => {
        const todoData = await response.json();
        setTodo(todoData.todo);
      }
    );
  }, [id]);

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
    </div>
  );
}

function Button({ id, onClick }) {
  return <button onClick={onClick}>{id}</button>;
}

export default App;
