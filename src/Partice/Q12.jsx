import { useState } from "react";

const IncrementCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Increment by 1: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </section>
  );
};

export default IncrementCounter;
