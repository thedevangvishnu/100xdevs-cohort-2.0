const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button>
            {todo.completed === true ? "Completed" : "Mask as complete"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
