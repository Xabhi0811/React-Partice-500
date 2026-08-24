import { useEffect, useState } from "react";
export default function Q399() {
  const [term, setTerm] = useState("");
  const [status, setStatus] = useState("Idle");
  useEffect(() => {
    const timer = setTimeout(() => setStatus(term ? `Search: ${term}` : "Idle"), 300);
    return () => clearTimeout(timer);
  }, [term]);
  return <div><input value={term} onChange={event => setTerm(event.target.value)} /><output>{status}</output></div>;
}
