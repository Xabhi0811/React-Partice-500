import { useEffect, useState } from "react";
export default function Q362() {
  const [runs, setRuns] = useState(0);
  const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    if (!enabled) return undefined;
    const timer = setTimeout(() => setRuns(value => value + 1), 0);
    return () => clearTimeout(timer);
  }, [enabled]);
  return <div><button onClick={() => setEnabled(value => !value)}>Toggle stable dependency</button><output>Effect runs: {runs}</output></div>;
}
