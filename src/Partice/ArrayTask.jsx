import { useState } from "react";

const ArrayTask = () => {
  const [items, setItems] = useState(["Read", "Practice"]);
  return (
    <>
      <button
        onClick={() =>
          setItems((value) => [...value, `Task ${value.length + 1}`])
        }
      >
        Add item
      </button>
      <button onClick={() => setItems((value) => value.slice(0, -1))}>
        Remove item
      </button>
      <output>{items.join(" | ")}</output>
    </>
  );
};

export default ArrayTask;
