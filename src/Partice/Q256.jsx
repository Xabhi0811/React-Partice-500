import { useCallback, useState } from "react";

const Q256 = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((value) => value + 1), []);
  return <button onClick={increment}>{count}</button>;
};

export default Q256;
