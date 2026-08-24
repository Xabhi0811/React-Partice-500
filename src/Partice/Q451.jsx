import { useRef, useState } from "react";
export default function Q451() {
  const renders = useRef(0);
  const [value, setValue] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const increment = () => {
    renders.current += 1;
    setRenderCount(renders.current);
    setValue(current => current + 1);
  };
  return <button onClick={increment}>Render count: {renderCount}, value: {value}</button>;
}
