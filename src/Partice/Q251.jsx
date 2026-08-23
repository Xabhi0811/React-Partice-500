import { memo, useCallback, useState } from "react";

const Child = memo(({ onClick }) => <button onClick={onClick}>Add</button>);

const Q251 = () => {
  const [count, setCount] = useState(0);
  const add = useCallback(() => setCount((value) => value + 1), []);
  return (
    <section>
      <Child onClick={add} />
      <p>{count}</p>
    </section>
  );
};

export default Q251;
