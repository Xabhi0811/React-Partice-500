import { useMemo, useState } from "react";
export default function Q420() {
  const [term, setTerm] = useState("");
  const rows = useMemo(() => ["Ada", "Grace", "Linus"].filter(name => name.toLowerCase().includes(term.toLowerCase())).sort(), [term]);
  return <div><input value={term} onChange={event => setTerm(event.target.value)} placeholder="Filter table" /><output>{rows.join(", ")}</output></div>;
}
