import { useState } from "react";

const Q346 = () => {
  const [count, setCount] = useState(0);
  const doubled = count * 2;
  return (
    <button onClick={() => setCount((value) => value + 1)}>{doubled}</button>
  );
};

export default Q346;
