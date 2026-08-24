import { useEffect, useState } from "react";
export default function Q386() {
  const [wide, setWide] = useState(() => matchMedia("(min-width: 700px)").matches);
  useEffect(() => {
    const query = matchMedia("(min-width: 700px)");
    const update = () => setWide(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return <output>{wide ? "Wide layout" : "Compact layout"}</output>;
}
