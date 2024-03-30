import { FaPenToSquare, FaCircleXmark, FaCheck } from "react-icons/fa6";
import { useMutation, useQueryClient } from "react-query";

import { TodoType } from "../contexts/TodosContext";

import * as requests from "../requests";
import { useState } from "react";
import MarkDone from "./MarkDone";
import DisplayTodo from "./DisplayTodo";
import UpdateTodoForm from "./UpdateTodoForm";

export type ModifiedTodoType = {
  id: number;
  title: string;
  description?: string;
  done: boolean;
};

const Todo = ({ todo }: { todo: TodoType }) => {
  const [markDone, setMarkDone] = useState(todo.done);
  const [editMode, setEditMode] = useState<boolean | undefined>(false);

  const queryClient = useQueryClient();

  const { mutate: deleteTodo } = useMutation(requests.deleteTodo, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("todos");
      console.log(`Todo with id ${todo.id} deleted!`);
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });

  const { mutate: update } = useMutation(requests.updateTodo, {
    onSuccess: () => {
      setMarkDone(!markDone);
    },
    onError: () => {},
  });

  const onDeleteIconClick = (todoId: number) => {
    deleteTodo(todoId);
  };

  const onCheckBoxClick = (todo: ModifiedTodoType) => {
    update({ ...todo, done: !todo.done });
  };

  return (
    <div>
      {editMode ? (
        <UpdateTodoForm todo={todo} setEditMode={setEditMode} />
      ) : (
        <DisplayTodo
          todo={todo}
          markDone={markDone}
          setEditMode={setEditMode}
          onCheckBoxClick={onCheckBoxClick}
          onDeleteIconClick={onDeleteIconClick}
        />
      )}
    </div>
  );
};

export default Todo;
