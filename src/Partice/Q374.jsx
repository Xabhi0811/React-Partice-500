import { useEffect, useState } from "react";
export default function Q374() {
  const [title, setTitle] = useState("React demo");
  useEffect(() => {
    const original = document.title;
    document.title = title;
    return () => {
      document.title = original;
    };
  }, [title]);
  return <input value={title} onChange={event => setTitle(event.target.value)} />;
}
