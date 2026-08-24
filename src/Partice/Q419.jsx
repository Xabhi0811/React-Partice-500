import { useEffect, useState } from "react";
export default function Q419() {
  const [status, setStatus] = useState("Idle");
  useEffect(() => {
    let active = true;
    (async () => {
      const value = await Promise.resolve("Complete");
      if (active) setStatus(value);
    })();
    return () => {
      active = false;
    };
  }, []);
  return <output>{status}</output>;
}
