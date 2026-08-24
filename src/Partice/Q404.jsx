import { memo, useState } from "react";
const Child = memo(({
  value
}) => <output>Child value: {value}</output>);
export default function Q404() {
  const [value, setValue] = useState(0);
  return <div><button onClick={() => setValue(current => current + 1)}>Update {value}</button><Child value={value} /></div>;
}
