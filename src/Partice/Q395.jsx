import { useState } from "react";
export default function Q395() {
  const [value, setValue] = useState(0);
  return <button onClick={() => setValue(current => current + 1)}>Throttle/debounce events: {value}</button>;
}
