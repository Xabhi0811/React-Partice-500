import { useMemo, useState } from "react";

const items = ["Banana", "Apple", "Mango"];

const Q238 = () => {
  const [reverse, setReverse] = useState(false);
  const sorted = useMemo(
    () => [...items].sort((a, b) => a.localeCompare(b)),
    [],
  );
  const result = reverse ? [...sorted].reverse() : sorted;
  return (
    <button onClick={() => setReverse((value) => !value)}>
      {result.join(", ")}
    </button>
  );
};

export default Q238;
