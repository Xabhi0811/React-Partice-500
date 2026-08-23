import { memo, useState } from "react";

const Child = memo(({ name }) => <p>{name}</p>);

const Q258 = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <button onClick={() => setCount((value) => value + 1)}>{count}</button>
      <Child name="Stable" />
    </section>
  );
};

export default Q258;
