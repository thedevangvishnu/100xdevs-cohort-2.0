import { useState } from "react";

const CreateTodo = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const addTodo = async () => {
    await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });

    setTodos((previousTodos) => [...previousTodos, { title, description }]);

    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={onTitleChange}
      />
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={onDescriptionChange}
      />

      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add todo
      </button>
    </div>
  );
};

export default CreateTodo;
