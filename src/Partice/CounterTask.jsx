import { useState } from "react";

const CounterTask = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <output>{count}</output>
      <button onClick={() => setCount((value) => value + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};

export default CounterTask;
