import { useState } from "react";
import "./App.css";
import Count from "./components/Count";
import Buttons from "./components/Buttons";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Count count={count} />
      <Buttons setCount={setCount} count={count} />
    </div>
  );
}

export default App;
