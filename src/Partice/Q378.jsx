import { useEffect, useState } from "react";
export default function Q378() {
  const [state, setState] = useState("Loading");
  useEffect(() => {
    const timer = setTimeout(() => setState("Loaded"), 300);
    return () => clearTimeout(timer);
  }, []);
  return <output>{state}</output>;
}
