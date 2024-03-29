import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { MdDescription, MdTitle } from "react-icons/md";

import * as requests from "../requests";

export type CreateTodoType = {
  title: string;
  description?: string;
};

const CreateTodo = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTodoType>();

  const { mutate, isLoading } = useMutation(requests.createTodo, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("todos");
      reset();
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });

  const onSubmit = async (todo: CreateTodoType) => {
    mutate(todo);
  };

  return (
    <div className="w-full md:max-w-full px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-8 items-center justify-center"
      >
        <div className="w-full flex flex-col gap-2">
          <label className="w-full flex gap-2 items-center border-b-2">
            <span>
              <MdTitle className="text-xl opacity-40" />
            </span>
            <input
              type="text"
              placeholder="Title"
              className="w-full py-3 px-2 border-none outline-none bg-transparent text-white text-xl"
              {...register("title", {
                required: "This field is required!",
              })}
            />
          </label>
          <div className="h-3 w-full self-start text-left">
            {errors.title && (
              <p className="text-red-500 italic">{errors.title.message}</p>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="w-full flex gap-2 items-start justify-start p-2 border-2">
            <span>
              <MdDescription className="text-lg opacity-40 mt-1" />
            </span>
            <textarea
              rows={4}
              placeholder="Description (optional)"
              className="w-full px-2 border-none outline-none bg-transparent text-white text-xl"
              {...register("description", {
                required: false,
              })}
            ></textarea>
          </label>
        </div>

        <button type="submit" className="mt-2">
          {isLoading ? "CREATING..." : "CREATE TODO"}
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
