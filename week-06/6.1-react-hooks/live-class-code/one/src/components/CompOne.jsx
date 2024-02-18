import React, { useState } from "react";

// Here, all the components re-render. Not optimital

const CompOne = () => {
  const [title, setTitle] = useState("Header");

  const clickHandler = () => {
    setTitle(Math.floor(Math.random() * 10));
  };

  return (
    <>
      <button onClick={clickHandler}>Update the title</button>
      <Header title={title} />
      <Header title="Header 2" />
      <Header title="Header 2" />
      <Header title="Header 2" />
      <Header title="Header 2" />
    </>
  );
};

function Header({ title }) {
  return <div>{title}</div>;
}

export default CompOne;
