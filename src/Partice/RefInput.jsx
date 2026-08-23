import { useRef } from "react";

const RefInput = () => {
  const inputRef = useRef(null);
  return (
    <>
      <input ref={inputRef} placeholder="Focus target" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
};

export default RefInput;
