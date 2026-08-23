import { useState } from "react";

const StateCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </section>
  );
};

export default StateCounter;
