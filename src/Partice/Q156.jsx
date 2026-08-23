import { useRef } from "react";

const Q156 = () => {
  const ref = useRef(null);
  return <button onClick={() => alert(String(ref.current))}>Read ref</button>;
};

export default Q156;
