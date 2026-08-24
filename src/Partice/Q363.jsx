import { useMemo, useState } from "react";
export default function Q363() {
  const [term, setTerm] = useState("");
  const [descending, setDescending] = useState(false);
  const items = useMemo(() => ["React", "Hooks", "Reducer", "Memo"].filter(item => item.toLowerCase().includes(term.toLowerCase())).sort((a, b) => descending ? b.localeCompare(a) : a.localeCompare(b)), [term, descending]);
  return <div><input value={term} onChange={event => setTerm(event.target.value)} /><button onClick={() => setDescending(value => !value)}>Sort</button><output>{items.join(", ")}</output></div>;
}
