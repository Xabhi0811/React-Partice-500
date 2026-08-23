import { useEffect, useState } from "react";

const Q142 = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    document.title = active ? "Active" : "Inactive";
  }, [active]);
  return (
    <button onClick={() => setActive((value) => !value)}>
      {String(active)}
    </button>
  );
};

export default Q142;
