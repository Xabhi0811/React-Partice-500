import { useEffect, useRef, useState } from "react";
export default function Q384() {
  const ref = useRef(null);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const close = event => {
      if (event.key === "Escape" || ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("mousedown", close);
    };
  }, []);
  return <div ref={ref}>{open ? "Open: click outside or press Escape" : <button onClick={() => setOpen(true)}>Reopen</button>}</div>;
}
