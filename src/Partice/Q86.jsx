import { useEffect, useState } from "react";

const Q86 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => console.log("Count changed", count), [count]);
  return (
    <button onClick={() => setCount((value) => value + 1)}>{count}</button>
  );
};

export default Q86;
