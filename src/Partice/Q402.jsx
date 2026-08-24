import { useEffect, useState } from "react";
export default function Q402() {
  const [idle, setIdle] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIdle(true), 1000);
    const reset = () => setIdle(false);
    window.addEventListener("mousemove", reset);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", reset);
    };
  }, [idle]);
  return <output>{idle ? "Idle" : "Active"}</output>;
}
