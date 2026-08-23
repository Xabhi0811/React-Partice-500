import { useCallback, useState } from "react";

const Q247 = () => {
  const [count, setCount] = useState(0);
  const add = useCallback((amount) => setCount(count + amount), [count]);
  return <button onClick={() => add(1)}>{count}</button>;
};

export default Q247;
