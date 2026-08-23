import { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => <input {...props} ref={ref} />);

const Q337 = () => {
  const input = useRef(null);
  return (
    <section>
      <Input ref={input} />
      <button onClick={() => input.current.focus()}>Focus</button>
    </section>
  );
};

export default Q337;
