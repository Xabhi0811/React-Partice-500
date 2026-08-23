import { useState } from "react";

const InitialCounter = () => {
  const [count, setCount] = useState(10);

  return (
    <section>
      <h2>Initial counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </section>
  );
};

export default InitialCounter;
