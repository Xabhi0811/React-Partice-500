import React from "react";

const Child = (props) => {
  return (
    <div>
      <h2>Name: {props.user.name}</h2>
      <h2>Age: {props.user.age}</h2>

      <button onClick={props.handleClick}>
        Click Me
      </button>
    </div>
  );
};

const ObjectProps = () => {
  const user = {
    name: "Abhishek",
    age: 18,
  };

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <Child user={user} handleClick={handleClick} />
    </div>
  );
};

export default ObjectProps;