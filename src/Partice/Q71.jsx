import { useState } from "react";

const SpreadArrayUpdate = () => {
  const [items, setItems] = useState(["One"]);

  return (
    <button onClick={() => setItems((current) => [...current, "Two"])}>
      {items.join(", ")}
    </button>
  );
};

export default SpreadArrayUpdate;
