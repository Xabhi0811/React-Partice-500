import { useRef } from "react";

const Q175 = () => {
  const stable = useRef(Object.freeze({ key: "value" }));
  return (
    <button onClick={() => alert(stable.current.key)}>Read stable value</button>
  );
};

export default Q175;
