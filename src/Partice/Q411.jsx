import { useEffect, useRef, useState } from "react";
export default function Q411() {
  const [ticks, setTicks] = useState(0);
  const started = useRef(null);
  useEffect(() => {
    started.current = Date.now();
    const timer = setInterval(() => setTicks(Math.floor((Date.now() - started.current) / 1000)), 1000);
    return () => clearInterval(timer);
  }, []);
  return <output>Elapsed seconds: {ticks}</output>;
}
