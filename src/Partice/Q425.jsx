import { useEffect, useRef } from "react";
export default function Q425() {
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return <output>Mounted ref is ready</output>;
}
