import { useState } from "react";

const Q340 = () => {
  const [items, setItems] = useState(["A"]);
  return (
    <button onClick={() => setItems((current) => [...current, "B"])}>
      {items.join(", ")}
    </button>
  );
};

export default Q340;
