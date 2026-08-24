import { useEffect, useState } from "react";
export default function Q423() {
  const [locked, setLocked] = useState(false);
  useEffect(() => {
    if (!locked) return undefined;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
  return <button onClick={() => setLocked(value => !value)}>Lock scroll: {String(locked)}</button>;
}
