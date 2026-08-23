import { useState } from "react";

const ToggleBoolean = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <section>
      <h2>Toggle: {String(isOn)}</h2>
      <button onClick={() => setIsOn((current) => !current)}>Toggle</button>
    </section>
  );
};

export default ToggleBoolean;
