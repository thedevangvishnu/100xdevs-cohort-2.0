import Buttons from "./Buttons";
import CountRenderer from "./CountRenderer";

const Count = ({ setCount }) => {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} count={count} />
    </div>
  );
};

export default Count;
