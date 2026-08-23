import { useRef } from "react";

const Q157 = () => {
  const value = useRef("Stored value");
  return (
    <button onClick={() => alert(value.current)}>Read stored value</button>
  );
};

export default Q157;
