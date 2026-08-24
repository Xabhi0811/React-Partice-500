import { useEffect, useState } from "react";
export default function Q392() {
  const [held, setHeld] = useState(false);
  useEffect(() => {
    const down = event => event.key === "Shift" && setHeld(true);
    const up = event => event.key === "Shift" && setHeld(false);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);
  return <output>Shift held: {String(held)}</output>;
}
