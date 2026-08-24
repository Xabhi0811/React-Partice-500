import { useMemo, useState } from "react";
export default function Q443() {
  const [value, setValue] = useState(0);
  const input = useMemo(() => ({
    value
  }), [value]);
  return <button onClick={() => setValue(current => current + 1)}>Stable input: {input.value}</button>;
}
