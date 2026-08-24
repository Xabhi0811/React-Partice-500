import { useEffect, useState } from "react";
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => localStorage.getItem(key) || initial);
  useEffect(() => localStorage.setItem(key, value), [key, value]);
  return [value, setValue];
}
export default function Q372() {
  const [name, setName] = useLocalStorage("q372-name", "Ada");
  return <input value={name} onChange={event => setName(event.target.value)} />;
}
