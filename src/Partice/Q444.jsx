import { useEffect, useState } from "react";
export default function Q444() {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const update = () => setPosition(window.scrollY);
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <output>Scroll: {position}</output>;
}
