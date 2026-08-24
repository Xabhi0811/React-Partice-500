import { useEffect, useState } from "react";
export default function Q397() {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => active && setActive(false), 600);
    return () => clearTimeout(timer);
  }, [active]);
  return <button onClick={() => setActive(true)}>Clean timer: {String(active)}</button>;
}
