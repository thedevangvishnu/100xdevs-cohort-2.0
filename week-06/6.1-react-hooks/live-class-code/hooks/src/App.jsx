import { useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    alert("hi");
    console.log("hi");
  }, []);
  return <h1>Hooks</h1>;
}

export default App;
