import { useEffect, useState } from "react";
export default function Q429() {
  const [term, setTerm] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => setQuery(term), 350);
    return () => clearTimeout(timer);
  }, [term]);
  return <div><input value={term} onChange={event => setTerm(event.target.value)} /><output>Fetched query: {query}</output></div>;
}
