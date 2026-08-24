import { useEffect, useRef, useState } from "react";
export default function Q365() {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState();
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  const increment = () => {
    setPrevious(ref.current);
    setValue(current => current + 1);
  };
  return <button onClick={increment}>Now {value}, before {previous ?? "none"}</button>;
}
