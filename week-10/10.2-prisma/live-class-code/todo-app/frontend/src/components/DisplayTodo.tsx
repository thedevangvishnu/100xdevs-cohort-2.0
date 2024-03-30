import { FaPenToSquare, FaCircleXmark, FaCheck } from "react-icons/fa6";
import { TodoType } from "../contexts/TodosContext";

type DisplayTodoType = {
  todo: TodoType;
  markDone: boolean;
  setEditMode: (mode: boolean) => void;
  onCheckBoxClick: (todo: TodoType) => void;
  onDeleteIconClick: (id: number) => void;
};

const DisplayTodo = ({
  todo,
  markDone,
  setEditMode,
  onCheckBoxClick,
  onDeleteIconClick,
}: DisplayTodoType) => {
  return (
    <div
      className={`w-full rounded-xl px-6 py-6 flex items-center gap-4  ${
        markDone ? "bg-neutral-800" : "bg-neutral-950"
      }`}
    >
      {/* checkbox */}
      <div>
        <div
          onClick={() => onCheckBoxClick(todo)}
          className={`w-5 h-5 border-2 border-gray-300 cursor-pointer flex items-center justify-center p-[3px] ${
            markDone ? "bg-neutral-700" : ""
          }`}
        >
          {markDone && <FaCheck className="text-gray-100" />}
        </div>
      </div>

      {/* title and description */}
      <div className="flex flex-col gap-1">
        <h2
          className={`text-lg font-bold ${
            markDone ? "text-neutral-500" : "text-neutral-200"
          }`}
        >
          {todo.title}
        </h2>
        <p className="text-neutral-500 line-clamp-2">{todo.description}</p>
      </div>

      {/* edit and delete icon*/}
      <div className="flex gap-3 items-center justify-center ml-auto mb-auto">
        <FaPenToSquare
          onClick={() => setEditMode(true)}
          className="text-lg cursor-pointer text-neutral-600 hover:text-neutral-200 focus:text-neutral-200"
          title="Edit todo"
        />
        <FaCircleXmark
          className="text-lg cursor-pointer text-neutral-600 hover:text-neutral-200 focus:text-neutral-200"
          title="Delete todo"
          onClick={() => onDeleteIconClick(todo.id)}
        />
      </div>
    </div>
  );
};

export default DisplayTodo;
