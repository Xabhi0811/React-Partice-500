import { memo, useState } from "react";

const Child = memo(({ config }) => <p>{config.label}</p>);

const Q260 = () => {
  const [count, setCount] = useState(0);
  const config = { label: "New object reference" };
  return (
    <section>
      <button onClick={() => setCount((value) => value + 1)}>{count}</button>
      <Child config={config} />
    </section>
  );
};

export default Q260;
