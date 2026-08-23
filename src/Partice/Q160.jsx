import { useRef, useState } from "react";

const Q160 = () => {
  const [state, setState] = useState(0);
  const ref = useRef(0);
  return (
    <section>
      <button onClick={() => setState((value) => value + 1)}>
        State {state}
      </button>
      <button
        onClick={() => {
          ref.current += 1;
        }}
      >
        Change ref
      </button>
    </section>
  );
};

export default Q160;
