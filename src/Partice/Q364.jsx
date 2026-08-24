import { memo, useCallback, useState } from "react";
const Child = memo(function Child({
  onAdd
}) {
  return <button onClick={onAdd}>Add from memo child</button>;
});
export default function Q364() {
  const [count, setCount] = useState(0);
  const [child, setChild] = useState(0);
  const add = useCallback(() => setChild(value => value + 1), []);
  return <div><button onClick={() => setCount(value => value + 1)}>Parent {count}</button><Child onAdd={add} /><output>Child: {child}</output></div>;
}
