import { useMemo, useState } from "react";

const Q234 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Abhi");
  const label = useMemo(() => `${name}: ${count}`, [name, count]);
  return (
    <button
      onClick={() => {
        setCount((value) => value + 1);
        setName("User");
      }}
    >
      {label}
    </button>
  );
};

export default Q234;
