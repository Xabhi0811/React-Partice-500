import { useEffect, useState } from "react";

const Q349 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount((value) => value + 1), 1000);
    return () => clearTimeout(timer);
  }, []);
  return <p>{count}</p>;
};

export default Q349;
