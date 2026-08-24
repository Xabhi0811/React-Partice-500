import { useEffect, useRef, useState } from "react";
export default function Q383() {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(Boolean(ref.current));
  }, []);
  return <div ref={ref}><output>Mounted ref: {String(ready)}</output></div>;
}
