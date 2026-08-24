import { useState } from "react";
export default function Q409() {
  const [items, setItems] = useState(["Loaded 1"]);
  return <div><button onClick={() => setItems(list => [...list, `Loaded ${list.length + 1}`])}>Load more</button><output>{items.join(", ")}</output></div>;
}
