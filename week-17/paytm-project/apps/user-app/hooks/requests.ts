import { LoginFormType, RegisterFormType } from "../schemas";

export const register = async (values: RegisterFormType) => {
  const response = await fetch("/api/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.error);
  }

  return responseBody;
};

export const login = async (values: LoginFormType) => {
  const response = await fetch("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.error);
  }

  return responseBody;
};
