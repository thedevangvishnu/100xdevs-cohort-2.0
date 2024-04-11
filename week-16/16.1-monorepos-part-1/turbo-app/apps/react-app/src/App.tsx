import "./App.css";
import { Message } from "@repo/ui/message";
import { InputBox } from "@repo/ui/input-box";

function App() {
  return (
    <>
      <Message>My React App inside Turborepo</Message>
      <InputBox>React input</InputBox>
    </>
  );
}

export default App;
