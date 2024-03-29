import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type TodoType = {
  title: string;
  description?: string;
  done: boolean;
  user_id: number;
};

export type UpdatedTodoType = {
  title: string;
  description: string;
  done: boolean;
};

export const createTodo = async (todo: TodoType) => {
  try {
    const res = await prisma.todo.create({
      data: {
        title: todo.title,
        description: todo.description,
        done: todo.done,
        user_id: todo.user_id,
      },
    });
    return res;
  } catch (error: any) {
    console.log("Error form model", error);
    throw new Error(error);
  }
};

export const getAllTodo = async (userId: number) => {
  try {
    const res = await prisma.todo.findMany({
      where: { user_id: userId },
    });

    return res;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const updateTodo = async (
  userId: number,
  todoId: number,
  updatedTodo: UpdatedTodoType
) => {
  try {
    const res = await prisma.todo.update({
      where: {
        user_id: userId,
        id: todoId,
      },
      data: {
        title: updatedTodo.title,
        description: updatedTodo.description,
        done: updatedTodo.done,
      },
    });

    return res;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const deleteTodo = async (userId: number, todoId: number) => {
  try {
    const res = await prisma.todo.delete({
      where: {
        user_id: userId,
        id: todoId,
      },
    });
    return res;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const getTodoById = async (userId: number, todoId: number) => {
  try {
    const res = await prisma.todo.findFirst({
      where: {
        user_id: userId,
        id: todoId,
      },
    });
    return res;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

/*
- create a new todo 
- get all todo
- update a todo
- delete a todo 

*/
