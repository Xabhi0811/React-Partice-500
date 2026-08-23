import { memo, useState } from "react";

const Child = memo(({ title }) => <p>{title}</p>);

const Q262 = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <button onClick={() => setCount((value) => value + 1)}>{count}</button>
      <Child title="Stable prop" />
    </section>
  );
};

export default Q262;
