import { useCallback, useState } from "react";

const Q248 = () => {
  const [count, setCount] = useState(0);
  const add = useCallback(() => setCount((value) => value + 1), []);
  return <button onClick={add}>{count}</button>;
};

export default Q248;
