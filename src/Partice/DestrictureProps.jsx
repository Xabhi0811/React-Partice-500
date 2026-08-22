import React from "react";

const DestrictureProps = ({ name, age }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <DestrictureProps name="Abhishek" age={18} />
    </div>
  );
};

export default DestrictureProps;