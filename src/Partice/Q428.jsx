import { useState } from "react";
export default function Q428() {
  const [items, setItems] = useState(["A"]);
  return <div><button onClick={() => setItems(list => [...list, "B"])}>Push</button><button onClick={() => setItems(list => list.slice(0, -1))}>Remove</button><button onClick={() => setItems([])}>Clear</button><output>{items.join(", ")}</output></div>;
}
