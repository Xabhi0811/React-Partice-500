import { useState } from "react";

const Q348 = () => {
  const [count, setCount] = useState(0);
  const add = () => setCount((current) => current + 1);
  return <button onClick={add}>{count}</button>;
};

export default Q348;
