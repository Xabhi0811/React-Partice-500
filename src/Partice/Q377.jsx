import { useEffect, useState } from "react";
export default function Q377() {
  const [status, setStatus] = useState("Waiting");
  useEffect(() => {
    let active = true;
    async function load() {
      const response = await Promise.resolve("Loaded safely");
      if (active) setStatus(response);
    }
    load();
    return () => {
      active = false;
    };
  }, []);
  return <output>{status}</output>;
}
