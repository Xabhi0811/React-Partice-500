import { useState } from "react";
export default function Q398() {
  const [value, setValue] = useState("");
  const error = value && !value.includes("@") ? "Use an email" : "";
  return <div><input value={value} onChange={event => setValue(event.target.value)} placeholder="Email" /><output>{error || "Valid"}</output></div>;
}
