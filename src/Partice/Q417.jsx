import { useState } from "react";
export default function Q417() {
  const [count, setCount] = useState(0);
  const step = 5;
  return <div><button onClick={() => setCount(value => Math.min(100, value + step))}>+{step}</button><button onClick={() => setCount(value => Math.max(0, value - step))}>-{step}</button><output>{count}</output></div>;
}
