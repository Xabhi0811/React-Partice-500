import { useState } from "react";

const Q266 = () => {
  const [value, setValue] = useState("");
  return (
    <input value={value} onChange={(event) => setValue(event.target.value)} />
  );
};

export default Q266;
