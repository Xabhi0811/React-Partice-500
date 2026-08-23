import { useRef } from "react";

const Q163 = () => {
  const input = useRef(null);
  return (
    <section>
      <input ref={input} />
      <button onClick={() => input.current.select()}>Select</button>
    </section>
  );
};

export default Q163;
