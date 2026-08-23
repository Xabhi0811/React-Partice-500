import { useState } from "react";

const IncrementSpecific = () => {
  const [count, setCount] = useState(0);
  const incrementBy = (amount) => setCount((current) => current + amount);

  return <button onClick={() => incrementBy(7)}>Value: {count}</button>;
};

export default IncrementSpecific;
