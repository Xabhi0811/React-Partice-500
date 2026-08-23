import { useState } from "react";

const TwoStateButtons = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <button onClick={() => setCount((current) => current + 1)}>Add</button>
      <button onClick={() => setCount((current) => current - 1)}>
        Subtract
      </button>
      <p>{count}</p>
    </section>
  );
};

export default TwoStateButtons;
