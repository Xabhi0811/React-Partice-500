import { useEffect, useRef, useState } from "react";
export default function Q375() {
  const [count, setCount] = useState(0);
  const callback = useRef(() => setCount(value => value + 1));
  useEffect(() => {
    const timer = setInterval(() => callback.current(), 1000);
    return () => clearInterval(timer);
  }, []);
  return <output>Interval: {count}</output>;
}
