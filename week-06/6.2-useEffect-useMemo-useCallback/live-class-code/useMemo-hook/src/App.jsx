import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  let sum = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= +query; i++) {
      sum += i;
    }
    return sum;
  }, [query]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <h3>Sum is {sum}</h3>
      <button onClick={() => setCount(count + 1)}>Couner: {count}</button>
    </>
  );
}

export default App;
