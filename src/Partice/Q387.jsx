import { memo, useMemo, useState } from "react";
const Child = memo(({
  config
}) => <output>Child renders: {config.label}</output>);
export default function Q387() {
  const [count, setCount] = useState(0);
  const config = useMemo(() => ({
    label: "stable object"
  }), []);
  return <div><button onClick={() => setCount(value => value + 1)}>Parent {count}</button><Child config={config} /></div>;
}
