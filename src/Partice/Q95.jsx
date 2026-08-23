import { useEffect, useState } from "react";

const Q95 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
  return (
    <button onClick={() => setCount((value) => value + 1)}>{count}</button>
  );
};

export default Q95;
