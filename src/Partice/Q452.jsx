import { useEffect, useState } from "react";
export default function Q452() {
  const [value, setValue] = useState("");
  const [saved, setSaved] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => setSaved(value), 500);
    return () => clearTimeout(timer);
  }, [value]);
  return <div><input value={value} onChange={event => setValue(event.target.value)} placeholder="Autosave" /><output>Saved: {saved}</output></div>;
}
