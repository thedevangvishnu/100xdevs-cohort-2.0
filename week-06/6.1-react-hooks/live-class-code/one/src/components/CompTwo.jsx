import React, { useState } from "react";

// push the state  as donw as possible (lowest common ancestor) to minimize the re-renders
// you can also use React.memo which lets to skip re-rendering the component if its props haven't changed

const CompTwo = () => {
  return (
    <>
      <HeaderWithButton />
      <Header title="Header 2" />
      <Header title="Header 3" />
      <Header title="Header 4" />
      <Header title="Header 5" />
    </>
  );
};

const HeaderWithButton = () => {
  const [title, setTitle] = useState("Header");

  const clickHandler = () => {
    setTitle(Math.floor(Math.random() * 10));
  };
  return (
    <>
      <button onClick={clickHandler}>Update the title</button>
      <Header title={title} />
    </>
  );
};

function Header({ title }) {
  return <div>{title}</div>;
}

export default CompTwo;
