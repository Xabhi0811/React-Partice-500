import { memo, useMemo, useState } from "react";

const Child = memo(({ items }) => <p>{items.join(", ")}</p>);

const Q309 = () => {
  const [count, setCount] = useState(0);
  const items = useMemo(() => ["A", "B"], []);

  return (
    <section>
      <button onClick={() => setCount((current) => current + 1)}>
        {count}
      </button>
      <Child items={items} />
    </section>
  );
};

export default Q309;
