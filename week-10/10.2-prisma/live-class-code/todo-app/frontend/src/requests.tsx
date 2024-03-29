import { RegisterFormType } from "./pages/Register";
import { LoginFormType } from "./pages/Login";
import { CreateTodoType } from "./components/CreateTodo";

const API_URL = "http://localhost:8000/api";

// user-related requests

export const register = async (formData: RegisterFormType) => {
  const response = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};

export const login = async (formData: LoginFormType) => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};

export const validateToken = async () => {
  const response = await fetch(`${API_URL}/users/validate-token`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Not authenticated!");
  }

  return response.json();
};

export const logout = async () => {
  const response = await fetch(`${API_URL}/users/logout`, {
    method: "POST",
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};

// todos-related requests

export const getAllTodo = async () => {
  const response = await fetch(`${API_URL}/todos`, {
    method: "GET",
    credentials: "include",
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody.todos;
};

export const createTodo = async (todo: CreateTodoType) => {
  const response = await fetch(`${API_URL}/todos/create`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};
