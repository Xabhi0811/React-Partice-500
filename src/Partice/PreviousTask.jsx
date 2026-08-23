import { useEffect, useRef, useState } from "react";

const PreviousTask = () => {
  const [value, setValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(0);
  const previous = useRef(value);
  useEffect(() => {
    setPreviousValue(previous.current);
    previous.current = value;
  }, [value]);

  return (
    <>
      <button onClick={() => setValue((current) => current + 1)}>
        Current {value}
      </button>
      <output>Previous {previousValue}</output>
    </>
  );
};

export default PreviousTask;
