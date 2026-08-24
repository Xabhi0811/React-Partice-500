import { useEffect, useState } from "react";
export default function Q432() {
  const [value, setValue] = useState("Ready");
  useEffect(() => {
    const timer = setTimeout(() => setValue("Timed out"), 700);
    return () => clearTimeout(timer);
  }, []);
  return <output>{value}</output>;
}
