import { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => <input ref={ref} {...props} />);

const Q332 = () => {
  const input = useRef(null);
  return (
    <section>
      <Input ref={input} />
      <button onClick={() => input.current.focus()}>Focus</button>
    </section>
  );
};

export default Q332;
