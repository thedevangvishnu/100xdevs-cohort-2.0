import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { MdDescription, MdTitle } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";

import * as requests from "../requests";
import { TodoType } from "../contexts/TodosContext";
import { ModifiedTodoType } from "./Todo";
import { useEffect } from "react";

type UpdateTodoFormType = {
  todo: TodoType;
  setEditMode: (mode: boolean) => void;
};

const UpdateTodoForm = ({ todo, setEditMode }: UpdateTodoFormType) => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ModifiedTodoType>();

  useEffect(() => {
    reset(todo);
  }, [todo, reset]);

  const { mutate, isLoading } = useMutation(requests.updateTodo, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("todos");
      setEditMode(false);
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });

  const onSubmit = async (updatedTodo: ModifiedTodoType) => {
    const modifiedTodo = {
      id: todo.id,
      title: updatedTodo.title,
      description: updatedTodo.description,
      done: todo.done,
    };

    mutate(modifiedTodo);
  };

  return (
    <div className="w-full md:max-w-full px-6 bg-neutral-950 rounded-lg py-5 flex flex-col">
      <FaCircleArrowLeft
        className="text-lg cursor-pointer self-end text-neutral-600 hover:text-neutral-200 focus:text-neutral-200 "
        title="Go back"
        onClick={() => setEditMode(false)}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-2 items-center justify-center"
      >
        <div className="w-full flex flex-col gap-2">
          <label className="w-full flex gap-2 items-center border-b-2">
            <span>
              <MdTitle className="text-base opacity-40" />
            </span>
            <input
              type="text"
              placeholder="Title"
              className="w-full py-3 px-2 border-none outline-none bg-transparent text-white text-base"
              {...register("title", {
                required: "This field is required!",
              })}
            />
          </label>
          <div className="h-3 w-full self-start text-left">
            {errors.title && (
              <p className="text-red-500 italic text-xs">
                {errors.title.message}
              </p>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="w-full flex gap-2 items-center border-b-2">
            <span>
              <MdDescription className="text-base opacity-40" />
            </span>
            <input
              type="text"
              placeholder="Description (optional)"
              className="w-full py-3 px-2 border-none outline-none bg-transparent text-white text-base"
              {...register("description", {
                required: false,
              })}
            />
          </label>
        </div>

        <button type="submit" className="mt-2 text-xs self-end">
          {isLoading ? "UPDATING..." : "UPDATE"}
        </button>
      </form>
    </div>
  );
};

export default UpdateTodoForm;
