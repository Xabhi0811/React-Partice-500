import { useMemo, useState } from "react";
export default function Q445() {
  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(false);
  const options = useMemo(() => ["Apple", "Banana", "Cherry"].filter(item => item.toLowerCase().includes(term.toLowerCase())), [term]);
  return <div><input value={term} onFocus={() => setOpen(true)} onChange={event => {
      setTerm(event.target.value);
      setOpen(true);
    }} />{open && <output>{options.join(", ")}</output>}</div>;
}
