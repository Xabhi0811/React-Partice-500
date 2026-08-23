import { useState } from "react";

const BatchTask = () => {
  const [count, setCount] = useState(0);
  const addTwice = () => {
    setCount((value) => value + 1);
    setCount((value) => value + 1);
  };

  return (
    <>
      <output>{count}</output>
      <button onClick={addTwice}>Add twice</button>
    </>
  );
};

export default BatchTask;
