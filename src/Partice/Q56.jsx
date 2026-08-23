import { useState } from "react";

const UpdateArrayItem = () => {
  const [items, setItems] = useState(["Apple", "Banana"]);

  return (
    <section>
      <p>{items.join(", ")}</p>
      <button
        onClick={() =>
          setItems((current) =>
            current.map((item, index) => (index === 0 ? "Mango" : item)),
          )
        }
      >
        Update first
      </button>
    </section>
  );
};

export default UpdateArrayItem;
