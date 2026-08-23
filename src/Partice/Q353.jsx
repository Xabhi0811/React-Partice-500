import { useState } from "react";

const Q353 = () => {
  const [items] = useState(["React", "JavaScript", "CSS"]);
  const [filter, setFilter] = useState("");
  const visible = items.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <section>
      <input
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <ul>
        {visible.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Q353;
