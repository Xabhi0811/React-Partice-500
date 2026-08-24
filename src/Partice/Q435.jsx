import { useState } from "react";
export default function Q435() {
  const [value, setValue] = useState("");
  const valid = value.length >= 3;
  return <div><input value={value} onChange={event => setValue(event.target.value)} /><output>{valid ? "Valid" : "Three characters required"}</output></div>;
}
