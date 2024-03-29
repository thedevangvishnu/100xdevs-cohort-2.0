import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todos from "./pages/Todos";
import { useUserContext } from "./contexts/UserContext";

const App = () => {
  const { isLoggedIn } = useUserContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        {isLoggedIn && (
          <>
            <Route
              path="/todos"
              element={
                <Layout>
                  <Todos />
                </Layout>
              }
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
