import { useState } from "react";
import "./App.css";
import Count from "./components/Count";
import CountContext from "./contexts/counter-context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

export default App;
