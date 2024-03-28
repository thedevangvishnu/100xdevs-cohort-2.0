import { ReactNode, createContext, useContext } from "react";
import { useQuery } from "react-query";
import * as requests from "../requests";

type UserContextType = {
  isLoggedIn: boolean;
  username: string;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const { data, isError } = useQuery("token", requests.validateToken, {
    retry: false,
  });
  console.log(data);
  return (
    <UserContext.Provider
      value={{
        isLoggedIn: !isError,
        username: data?.name,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context as UserContextType;
};
