import { useState } from "react";
const useToggle = () => {
  const [value, setValue] = useState(false);
  return [value, () => setValue((current) => !current)];
};
const Q228 = () => {
  const [value, toggle] = useToggle();
  return <button onClick={toggle}>{String(value)}</button>;
};
export default Q228;
