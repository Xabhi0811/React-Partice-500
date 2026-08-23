import { useRef, useState } from "react";

const Q165 = () => {
  const input = useRef(null);
  const [value, setValue] = useState("");
  return (
    <section>
      <input ref={input} defaultValue="Read me" />
      <button onClick={() => setValue(input.current.value)}>Read</button>
      <p>{value}</p>
    </section>
  );
};

export default Q165;
