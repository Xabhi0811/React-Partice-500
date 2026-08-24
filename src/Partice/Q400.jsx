import { useState } from "react";
export default function Q400() {
  const [hovered, setHovered] = useState(false);
  return <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>Hover target: {String(hovered)}</div>;
}
