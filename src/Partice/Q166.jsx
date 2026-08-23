import { useRef } from "react";

const Q166 = () => {
  const first = useRef(null);
  const second = useRef(null);
  return (
    <section>
      <input ref={first} />
      <input ref={second} />
      <button onClick={() => second.current.focus()}>Focus second</button>
    </section>
  );
};

export default Q166;
