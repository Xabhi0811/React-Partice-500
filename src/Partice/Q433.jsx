import { useCallback, useState } from "react";
export default function Q433() {
  const [value, setValue] = useState(0);
  const add = useCallback(() => setValue(current => current + 1), []);
  return <button onClick={add}>Callback value: {value}</button>;
}
