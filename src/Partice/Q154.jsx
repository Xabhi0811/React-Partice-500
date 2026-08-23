import { useEffect, useState } from "react";

const Q154 = () => {
  const [value, setValue] = useState(0);
  useEffect(
    () => console.log("No effect is needed for this derived value"),
    [value],
  );
  return (
    <button onClick={() => setValue((current) => current + 1)}>
      {value * 2}
    </button>
  );
};

export default Q154;
