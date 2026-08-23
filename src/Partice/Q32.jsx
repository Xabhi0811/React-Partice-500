import { useState } from "react";

const ControlledSelect = () => {
  const [option, setOption] = useState("apple");

  return (
    <select value={option} onChange={(event) => setOption(event.target.value)}>
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
    </select>
  );
};

export default ControlledSelect;
