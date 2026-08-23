import { memo, useState } from "react";

const Child = memo(({ value }) => <p>{value}</p>);

const Q264 = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <button onClick={() => setCount((value) => value + 1)}>{count}</button>
      <Child value="Stable child" />
    </section>
  );
};

export default Q264;
