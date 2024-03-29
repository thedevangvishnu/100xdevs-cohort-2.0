import { RegisterFormType } from "./pages/Register";
import { LoginFormType } from "./pages/Login";

const API_URL = "http://localhost:8000/api";

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
