import { useEffect, useState } from "react";
export default function Q356() {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState("Type to search");
  useEffect(() => {
    const timer = setTimeout(() => setResult(term ? `Results for ${term}` : "Type to search"), 400);
    return () => clearTimeout(timer);
  }, [term]);
  return <div><input value={term} onChange={event => setTerm(event.target.value)} placeholder="Search" /><output>{result}</output></div>;
}
