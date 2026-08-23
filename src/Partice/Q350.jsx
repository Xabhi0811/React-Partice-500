import { useEffect, useState } from "react";

const Q350 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCount((value) => value + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  return <p>{count}</p>;
};

export default Q350;
