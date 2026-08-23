import { useMemo, useState } from "react";

const Q240 = () => {
  const [count, setCount] = useState(0);
  const normal = count * 2;
  const memoized = useMemo(() => count * 2, [count]);
  return (
    <button onClick={() => setCount((value) => value + 1)}>
      {normal} / {memoized}
    </button>
  );
};

export default Q240;
