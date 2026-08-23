import { useState } from "react";

const Q343 = () => {
  const [count, setCount] = useState(1);
  const doubled = count * 2;
  return (
    <button onClick={() => setCount((value) => value + 1)}>{doubled}</button>
  );
};

export default Q343;
