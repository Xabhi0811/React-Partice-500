import { useEffect, useState } from "react";
export default function Q439() {
  const [dark, setDark] = useState(() => localStorage.getItem("q439-dark") === "true");
  useEffect(() => localStorage.setItem("q439-dark", String(dark)), [dark]);
  return <button onClick={() => setDark(value => !value)}>Dark mode: {String(dark)}</button>;
}
