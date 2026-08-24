import { useState } from "react";
export default function Q406() {
  const [items, setItems] = useState(["A", "B", "C"]);
  const move = (from, to) => setItems(list => {
    const next = [...list];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    return next;
  });
  return <div>{items.map((item, index) => <button key={item} onClick={() => move(index, index ? index - 1 : index)}>{item}</button>)}</div>;
}
