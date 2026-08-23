import { useMemo, useState } from "react";

const Q233 = () => {
  const [count, setCount] = useState(1);
  const doubled = useMemo(() => count * 2, [count]);
  return (
    <button onClick={() => setCount((value) => value + 1)}>{doubled}</button>
  );
};

export default Q233;
