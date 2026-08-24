import { useEffect, useState } from "react";
export default function Q357() {
  const [term, setTerm] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (!term.trim()) return undefined;
    const timer = setTimeout(() => setStatus(`Fetched ${term}`), 0);
    return () => clearTimeout(timer);
  }, [term]);
  return <div><input value={term} onChange={event => setTerm(event.target.value)} /><output>{term.trim() ? status || "Searching" : "Waiting for a search term"}</output></div>;
}
