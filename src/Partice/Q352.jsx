import { useRef } from "react";

const Q352 = () => {
  const last = useRef(0);
  const handleMove = () => {
    const now = Date.now();
    if (now - last.current >= 500) last.current = now;
  };
  return <button onMouseMove={handleMove}>Throttled handler</button>;
};

export default Q352;
