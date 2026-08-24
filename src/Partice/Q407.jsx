import { useEffect, useState } from "react";
export default function Q407() {
  const [name, setName] = useState("Ada");
  useEffect(() => {}, [name]);
  return <div><input value={name} onChange={event => setName(event.target.value)} /><output>Hello {name}</output></div>;
}
