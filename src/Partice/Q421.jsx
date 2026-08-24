import { useEffect, useState } from "react";
export default function Q421() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCount(value => value + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  return <output>Polling: {count}</output>;
}
