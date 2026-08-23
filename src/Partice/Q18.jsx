import { useState } from "react";

const ThreeFunctionalUpdates = () => {
  const [count, setCount] = useState(0);

  const incrementThreeTimes = () => {
    setCount((current) => current + 1);
    setCount((current) => current + 1);
    setCount((current) => current + 1);
  };

  return (
    <section>
      <h2>Three functional updates: {count}</h2>
      <button onClick={incrementThreeTimes}>Add three</button>
    </section>
  );
};

export default ThreeFunctionalUpdates;
