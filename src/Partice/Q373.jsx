import { useEffect, useState } from "react";
export default function Q373() {
  const [events] = useState(["setup"]);
  useEffect(() => () => {}, []);
  return <output>Strict Mode lifecycle: {events.join(" -> ")} then cleanup</output>;
}
