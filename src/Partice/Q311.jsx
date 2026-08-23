import { memo, useState } from "react";

const Child = memo(({ name }) => <p>{name}</p>);

const Q311 = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <button onClick={() => setCount((current) => current + 1)}>
        {count}
      </button>
      <Child name="Primitive prop" />
    </section>
  );
};

export default Q311;
