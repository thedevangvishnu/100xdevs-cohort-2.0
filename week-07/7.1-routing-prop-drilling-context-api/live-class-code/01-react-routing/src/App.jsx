import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import AppBar from "./components/AppBar";

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
