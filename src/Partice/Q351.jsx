import { useEffect, useState } from "react";

const Q351 = () => {
  const [value, setValue] = useState("");
  const [debounced, setDebounced] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), 300);
    return () => clearTimeout(timer);
  }, [value]);
  return (
    <section>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <p>{debounced}</p>
    </section>
  );
};

export default Q351;
