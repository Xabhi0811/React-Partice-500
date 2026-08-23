import { useMemo, useState } from "react";

const Q232 = () => {
  const [count, setCount] = useState(0);
  const value = useMemo(
    () =>
      Array.from({ length: 10000 }, (_, index) => index).reduce(
        (total, number) => total + number,
        0,
      ),
    [],
  );
  return (
    <button onClick={() => setCount((current) => current + 1)}>
      {value} {count}
    </button>
  );
};

export default Q232;
