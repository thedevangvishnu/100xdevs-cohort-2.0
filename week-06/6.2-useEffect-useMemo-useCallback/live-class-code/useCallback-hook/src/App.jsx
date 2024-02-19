import { memo, useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let a = 100;

  // every time the App comp re-renders, this onButtonClickHandler is created again, which is not refrentially equal to the function from the previous render. That's why, react renders the child component again, even though it is wrapped inside memo.

  // the solution is to use useCallback(), which caches/memoizes the whole function
  const onButtonClickHandler = useCallback(() => {
    console.log("Button component");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <MyFunction a={a} />{" "}
      {/* this component will not re-render because equality check on variable a is always true */}
      <MyButton onButtonClick={onButtonClickHandler} />
    </>
  );
}

const MyFunction = memo(({ a }) => {
  console.log("ran");
  return <p>Value of a: {a}</p>;
});

const MyButton = memo(({ onButtonClick }) => {
  console.log("from inside button comp");
  return <button onClick={onButtonClick}>Button component</button>;
});

export default App;
