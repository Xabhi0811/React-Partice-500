import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");
  return (
    <input value={value} onChange={(event) => setValue(event.target.value)} />
  );
};

const Q265 = () => <Form />;
export default Q265;
