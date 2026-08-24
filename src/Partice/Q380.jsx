import { useState } from "react";
export default function Q380() {
  const [open, setOpen] = useState(false);
  return <div><button onClick={() => setOpen(value => !value)}>{open ? "Close" : "Open"} modal</button>{open && <div role="dialog">Modal content <button onClick={() => setOpen(false)}>Done</button></div>}</div>;
}
