import { FaPenToSquare, FaCircleXmark } from "react-icons/fa6";
import { useMutation, useQueryClient } from "react-query";

import { TodoType } from "../contexts/TodosContext";

import * as requests from "../requests";

const Todo = ({ todo }: { todo: TodoType }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(requests.deleteTodo, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("todos");
      console.log(`Todo with id ${todo.id} deleted!`);
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });

  const onDeleteIconClick = (todoId: number) => {
    mutate(todoId);
  };

  return (
    <div className="w-full rounded-xl px-6 py-6 flex items-center gap-4 bg-neutral-950">
      {/* checkbox */}
      <div>
        <div className="w-4 h-4 border-2 cursor-pointer"></div>
      </div>

      {/* title and description */}
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold">{todo.title}</h2>
        <p className="text-gray-600 line-clamp-2">{todo.description}</p>
      </div>
      {/* edit and delete */}
      <div className="flex gap-3 items-center justify-center ml-auto mb-auto">
        <FaPenToSquare
          className="text-xl cursor-pointer text-gray-600 hover:text-gray-200 focus:text-gray"
          title="Edit todo"
        />
        <FaCircleXmark
          className="text-xl cursor-pointer text-gray-600 hover:text-gray-200 focus:text-gray"
          title="Delete todo"
          onClick={() => onDeleteIconClick(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
