import { useEffect, useState } from "react";
export default function Q414() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setValue(current => current + 1), 500);
    return () => clearTimeout(timer);
  }, []);
  return <output>Fetched once: {value}</output>;
}
