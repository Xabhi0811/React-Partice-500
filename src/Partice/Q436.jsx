import { useState } from "react";
export default function Q436() {
  const [value, setValue] = useState(0);
  return <button onClick={() => setValue(current => current + 1)}>State updated by event: {value}</button>;
}
