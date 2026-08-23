import { useState } from "react";

const IncrementByFive = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Increment by 5: {count}</h2>
      <button onClick={() => setCount(count + 5)}>Add 5</button>
    </section>
  );
};

export default IncrementByFive;
