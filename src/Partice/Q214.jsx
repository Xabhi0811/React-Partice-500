import { useState } from "react";
const useValue = (initial) => {
  const [value, setValue] = useState(initial);
  return [value, setValue];
};
const Q214 = () => {
  const [value, setValue] = useValue("Ready");
  return <button onClick={() => setValue("Changed")}>{value}</button>;
};
export default Q214;
