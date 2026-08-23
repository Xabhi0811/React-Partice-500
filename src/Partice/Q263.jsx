import { useMemo, useState } from "react";

const Q263 = () => {
  const [term, setTerm] = useState("");
  const items = Array.from({ length: 1000 }, (_, index) => `Item ${index}`);
  const filtered = useMemo(
    () =>
      items.filter((item) => item.toLowerCase().includes(term.toLowerCase())),
    [items, term],
  );
  return (
    <section>
      <input value={term} onChange={(event) => setTerm(event.target.value)} />
      <p>{filtered.length} items</p>
    </section>
  );
};

export default Q263;
