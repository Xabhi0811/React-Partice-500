import { useEffect, useState } from "react";
export default function Q355() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(value => value + 1), 500);
    return () => clearTimeout(timer);
  }, [count]);
  return <button onClick={() => setCount(value => value + 1)}>Effect count: {count}</button>;
}
