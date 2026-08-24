import { useEffect, useState } from "react";
export default function Q366() {
  const [size, setSize] = useState(() => `${window.innerWidth} x ${window.innerHeight}`);
  useEffect(() => {
    const update = () => setSize(`${window.innerWidth} x ${window.innerHeight}`);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return <output>Window: {size}</output>;
}
