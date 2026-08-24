import { useState } from "react";
export default function Q382() {
  const [items, setItems] = useState([1, 2]);
  return <div><button onClick={() => setItems(list => [...list, list.length + 1])}>Load page</button><output>{items.join(", ")}</output></div>;
}
