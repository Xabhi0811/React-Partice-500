import { useMemo, useState } from "react";

const Q235 = () => {
  const [value, setValue] = useState(0);
  const result = useMemo(() => value * 2, [value]);
  return (
    <button onClick={() => setValue((current) => current + 1)}>{result}</button>
  );
};

export default Q235;
