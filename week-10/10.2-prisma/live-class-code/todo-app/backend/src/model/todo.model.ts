import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type TodoType = {
  title: string;
  description?: string;
  done: boolean;
  user_id: number;
  created_at: Date;
};

export const createTodo = async (todo: TodoType) => {
  try {
    const res = await prisma.todo.create({
      data: {
        title: todo.title,
        description: todo.description,
        done: todo.done,
        user_id: todo.user_id,
        created_at: todo.created_at,
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
      orderBy: {
        created_at: "asc",
      },
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
  todoTitle: string,
  todoDescription: string | null,
  todoDone: boolean
) => {
  try {
    const res = await prisma.todo.update({
      where: {
        user_id: userId,
        id: todoId,
      },
      data: {
        title: todoTitle,
        description: todoDescription,
        done: todoDone,
      },
    });

    return res;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const toggleDone = async (
  userId: number,
  todoId: number,
  todoDone: boolean
) => {
  try {
    const res = await prisma.todo.update({
      where: {
        user_id: userId,
        id: todoId,
      },
      data: {
        done: !todoDone,
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
