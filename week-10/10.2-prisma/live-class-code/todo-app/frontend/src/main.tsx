import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserContextProvider } from "./contexts/UserContext.tsx";
import { TodosContextProvider } from "./contexts/TodosContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <TodosContextProvider>
          <App />
        </TodosContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
