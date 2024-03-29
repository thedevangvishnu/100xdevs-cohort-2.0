import { useUserContext } from "../contexts/UserContext";
import CreateTodo from "../components/CreateTodo";

const Todos = () => {
  const { username } = useUserContext();
  return (
    <div className="px-4 py-10 md:px-8 lg:px-20 flex flex-col gap-16">
      <h2 className="text-4xl font-semibold text-center">{username}'s todos</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* create section */}
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <h3 className="text-2xl font-semibold bg-neutral-900 px-4 py-2 rounded-xl">
            Create a new todo
          </h3>
          <CreateTodo />
        </div>

        {/* view all todo's section */}
        <div className="flex flex-col w-full  md:w-1/2 gap-4 bg-neutral-900 px-4 py-2 rounded-xl">
          <h3 className="text-2xl font-semibold">Your Todos</h3>
        </div>
      </div>
    </div>
  );
};

export default Todos;
