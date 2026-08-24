import { useState } from "react";
export default function Q408() {
  const [value, setValue] = useState(() => new URLSearchParams(location.search).get("q") || "");
  const update = next => {
    setValue(next);
    history.replaceState(null, "", `?q=${encodeURIComponent(next)}`);
  };
  return <input value={value} onChange={event => update(event.target.value)} placeholder="URL query" />;
}
