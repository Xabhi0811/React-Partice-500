import { useMemo, useState } from "react";

const items = ["Apple", "Banana", "Mango"];

const Q237 = () => {
  const [term, setTerm] = useState("");
  const filtered = useMemo(
    () =>
      items.filter((item) => item.toLowerCase().includes(term.toLowerCase())),
    [term],
  );
  return (
    <section>
      <input value={term} onChange={(event) => setTerm(event.target.value)} />
      <p>{filtered.join(", ")}</p>
    </section>
  );
};

export default Q237;
