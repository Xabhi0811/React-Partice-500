import { memo, useState } from "react";

const Child = memo(({ onClick }) => <button onClick={onClick}>Child</button>);

const Q261 = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <button onClick={() => setCount((value) => value + 1)}>{count}</button>
      <Child onClick={() => alert("Clicked")} />
    </section>
  );
};

export default Q261;
