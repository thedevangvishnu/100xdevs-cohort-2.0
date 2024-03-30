import { createContext, ReactNode, useContext } from "react";
import { useQuery } from "react-query";
import * as requests from "../requests";

export type TodoType = {
  id: number;
  title: string;
  description?: string;
  done: boolean;
  user_id: number;
};

type TodosContextType = {
  todos: TodoType[] | [];
};

const TodosContext = createContext<TodosContextType | undefined>(undefined);

export const TodosContextProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = useQuery("todos", requests.getAllTodo, {
    retry: false,
  });

  return (
    <TodosContext.Provider
      value={{
        todos: data,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => {
  const context = useContext(TodosContext);
  return context as TodosContextType;
};
