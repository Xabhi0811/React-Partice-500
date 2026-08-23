import { useCallback, useMemo, useState } from "react";

const Q354 = () => {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");
  const [items] = useState(["React", "JavaScript", "CSS"]);
  const visible = useMemo(
    () =>
      items.filter((item) => item.toLowerCase().includes(filter.toLowerCase())),
    [items, filter],
  );
  const increment = useCallback(() => setCount((value) => value + 1), []);
  return (
    <section>
      <input
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <button onClick={increment}>{count}</button>
      <ul>
        {visible.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Q354;
