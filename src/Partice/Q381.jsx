import { useEffect, useState } from "react";
export default function Q381() {
  const [id, setId] = useState(1);
  const [message, setMessage] = useState("Loading");
  useEffect(() => {
    const timer = setTimeout(() => setMessage(`Loaded item ${id}`), 250);
    return () => clearTimeout(timer);
  }, [id]);
  return <div><button onClick={() => setId(value => value + 1)}>Next id</button><output>{message}</output></div>;
}
