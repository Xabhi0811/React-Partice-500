import { useRef, useState } from "react";

const Q167 = () => {
  const [first, setFirst] = useState(true);
  const input = useRef(null);
  return (
    <section>
      {first && <input ref={input} />}
      <button
        onClick={() => {
          setFirst(true);
          input.current?.focus();
        }}
      >
        Show and focus
      </button>
    </section>
  );
};

export default Q167;
