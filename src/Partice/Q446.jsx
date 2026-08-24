import { useEffect, useRef, useState } from "react";
export default function Q446() {
  const [value, setValue] = useState(0);
  const [difference, setDifference] = useState(0);
  const previous = useRef(0);
  useEffect(() => {
    previous.current = value;
  }, [value]);
  const increment = () => {
    setDifference(value - previous.current + 1);
    setValue(current => current + 1);
  };
  return <button onClick={increment}>Diff: {difference}</button>;
}
