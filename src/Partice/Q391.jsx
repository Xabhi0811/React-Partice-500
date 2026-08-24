import { useState } from "react";
export default function Q391() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard?.writeText("Copied text");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return <button onClick={copy}>{copied ? "Copied" : "Copy text"}</button>;
}
