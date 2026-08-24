import { useEffect, useRef, useState } from "react";
export default function Q413() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) ref.current?.focus();
  }, [open]);
  return <div>{open ? <button ref={ref} onClick={() => setOpen(false)}>Close focused modal</button> : <button onClick={() => setOpen(true)}>Open modal</button>}</div>;
}
