import { useRef } from "react";

const Q161 = () => {
  const input = useRef(null);
  return <input ref={input} placeholder="Referenced input" />;
};

export default Q161;
