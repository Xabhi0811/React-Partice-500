import { memo, useCallback, useMemo, useState } from "react";

const Child = memo(({ user, onClick }) => (
  <button onClick={onClick}>{user.name}</button>
));

const Q315 = () => {
  const [count, setCount] = useState(0);
  const user = useMemo(() => ({ name: "Abhi" }), []);
  const increment = useCallback(() => setCount((value) => value + 1), []);

  return (
    <section>
      <Child user={user} onClick={increment} />
      <p>{count}</p>
    </section>
  );
};

export default Q315;
