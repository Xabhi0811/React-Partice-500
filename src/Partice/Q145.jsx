import { useEffect, useState } from "react";

const Q145 = () => {
  const [count, setCount] = useState(1);
  const [double, setDouble] = useState(2);
  useEffect(() => {
    const timer = setTimeout(() => setDouble(count * 2), 0);
    return () => clearTimeout(timer);
  }, [count]);
  return (
    <button onClick={() => setCount((value) => value + 1)}>
      {count} x 2 = {double}
    </button>
  );
};

export default Q145;
