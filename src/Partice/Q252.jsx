import { useCallback, useState } from "react";

const Q252 = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => setCount((value) => value + 1), []);
  return <button onClick={handleClick}>{count}</button>;
};

export default Q252;
