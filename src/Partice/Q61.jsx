import { useState } from "react";

const UpdateObjectArray = () => {
  const [items, setItems] = useState([{ id: 1, name: "Old name" }]);

  return (
    <section>
      {items.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
      <button
        onClick={() =>
          setItems((current) =>
            current.map((item) =>
              item.id === 1 ? { ...item, name: "New name" } : item,
            ),
          )
        }
      >
        Update object
      </button>
    </section>
  );
};

export default UpdateObjectArray;
