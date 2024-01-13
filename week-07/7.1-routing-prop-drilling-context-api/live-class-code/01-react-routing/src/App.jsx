import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AppBar from "./components/AppBar";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "black", color: "white" }}>
        {/* This way of routing is fetching bundles again and again. There's a constant hard reload everytime either of the button is clicked */}
        {/* <button
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Landing
        </button> */}
      </div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
