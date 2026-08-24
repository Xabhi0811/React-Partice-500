import { useEffect, useState } from "react";
export default function Q358() {
  const [term, setTerm] = useState("");
  const [status, setStatus] = useState("Idle");
  useEffect(() => {
    const controller = new AbortController();
    if (term) {
      fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${term}`, {
        signal: controller.signal
      }).then(() => setStatus(`Loaded ${term}`)).catch(error => {
        if (error.name !== "AbortError") setStatus("Request failed");
      });
    }
    return () => controller.abort();
  }, [term]);
  return <div><input value={term} onChange={event => setTerm(event.target.value)} /><output>{term ? status : "Idle"}</output></div>;
}
