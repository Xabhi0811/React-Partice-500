import { useState } from "react";

const ClearArray = () => {
  const [items, setItems] = useState(["One", "Two"]);

  return (
    <section>
      <p>{items.join(", ")}</p>
      <button onClick={() => setItems([])}>Clear</button>
    </section>
  );
};

export default ClearArray;
