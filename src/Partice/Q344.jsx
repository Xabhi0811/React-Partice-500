import { useState } from "react";

const Q344 = () => {
  const [name, setName] = useState("Abhi");
  return (
    <input value={name} onChange={(event) => setName(event.target.value)} />
  );
};

export default Q344;
