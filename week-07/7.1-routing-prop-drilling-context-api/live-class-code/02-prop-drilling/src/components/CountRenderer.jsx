import { useContext } from "react";
import CountContext from "../contexts/counter-context";

const CountRenderer = ({ count }) => {
  const count = useContext(CountContext);
  return <div>{count}</div>;
};

export default CountRenderer;
