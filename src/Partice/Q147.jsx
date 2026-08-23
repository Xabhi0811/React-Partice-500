import { useEffect, useState } from "react";

const Q147 = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 0) console.log("Effect runs after state update");
  }, [value]);
  return (
    <button onClick={() => setValue((current) => current + 1)}>{value}</button>
  );
};

export default Q147;
