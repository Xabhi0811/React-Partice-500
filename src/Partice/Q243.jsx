import { useState } from "react";

const Q243 = () => {
  const [count, setCount] = useState(0);
  const user = { name: "Abhi" };
  return (
    <button onClick={() => setCount((value) => value + 1)}>
      {user.name}: {count}
    </button>
  );
};

export default Q243;
