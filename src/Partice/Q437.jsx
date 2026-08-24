import { useEffect, useRef, useState } from "react";
export default function Q437() {
  const [width, setWidth] = useState(0);
  const handler = useRef(() => setWidth(window.innerWidth));
  useEffect(() => {
    const listener = handler.current;
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);
  return <output>Width: {width}</output>;
}
