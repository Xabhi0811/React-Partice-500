import { useState } from "react";

const AddObjectArray = () => {
  const [items, setItems] = useState([]);

  return (
    <section>
      <p>{items.map((item) => item.name).join(", ")}</p>
      <button
        onClick={() =>
          setItems((current) => [...current, { id: 1, name: "New item" }])
        }
      >
        Add object
      </button>
    </section>
  );
};

export default AddObjectArray;
