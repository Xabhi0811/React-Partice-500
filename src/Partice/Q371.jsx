import { useEffect, useRef, useState } from "react";
export default function Q371() {
  const ref = useRef(null);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const close = event => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  return <div ref={ref}>{open ? <button onClick={() => setOpen(false)}>Inside panel</button> : <button onClick={() => setOpen(true)}>Open panel</button>}</div>;
}
