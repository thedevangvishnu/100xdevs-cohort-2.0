import { useContext } from "react";
import CountContext from "../contexts/counter-context";

const Buttons = ({ count, setCount }) => {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Buttons;
