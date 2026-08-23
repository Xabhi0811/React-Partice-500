import { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => <input ref={ref} {...props} />);

const Q333 = () => {
  const input = useRef(null);
  const read = () => alert(input.current.value);
  return (
    <section>
      <Input ref={input} defaultValue="Read me" />
      <button onClick={read}>Read DOM</button>
    </section>
  );
};

export default Q333;
