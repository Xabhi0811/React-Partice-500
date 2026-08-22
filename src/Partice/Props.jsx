import React from "react";

const Props = () => {
  const Greeting = (props) => {
    return <h1>Name is, {props.name}!</h1>;
  };

  return (
    <div>
      <Greeting name="Abhishek" />
      <Greeting name="Bittu" />
    </div>
  );
};

export default Props;