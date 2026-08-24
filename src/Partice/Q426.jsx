import { useEffect, useState } from "react";
export default function Q426() {
  const [clicks, setClicks] = useState(0);
  useEffect(() => {
    const handler = () => setClicks(value => value + 1);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);
  return <output>Window clicks: {clicks}</output>;
}
