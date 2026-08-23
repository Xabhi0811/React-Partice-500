import { useEffect, useState } from "react";

const Q93 = () => {
  const [value, setValue] = useState(0);
  useEffect(() => console.log("State changed"));
  return (
    <button onClick={() => setValue((current) => current + 1)}>{value}</button>
  );
};

export default Q93;
