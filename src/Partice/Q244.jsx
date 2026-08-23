import { memo, useMemo, useState } from "react";

const Child = memo(({ user }) => <p>{user.name}</p>);

const Q244 = () => {
  const [count, setCount] = useState(0);
  const user = useMemo(() => ({ name: "Abhi" }), []);
  return (
    <section>
      <button onClick={() => setCount((value) => value + 1)}>{count}</button>
      <Child user={user} />
    </section>
  );
};

export default Q244;
