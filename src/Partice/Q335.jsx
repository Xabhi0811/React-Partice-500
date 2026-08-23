import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef((props, ref) => {
  const input = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => input.current.focus(),
    clear: () => {
      input.current.value = "";
    },
  }));
  return <input ref={input} {...props} />;
});

const Q335 = () => {
  const input = useRef(null);
  return (
    <section>
      <Input ref={input} />
      <button onClick={() => input.current.focus()}>Focus</button>
    </section>
  );
};

export default Q335;
