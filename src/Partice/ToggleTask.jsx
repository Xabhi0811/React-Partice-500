import { useState } from "react";

const ToggleTask = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <button onClick={() => setEnabled((value) => !value)}>
      {enabled ? "On" : "Off"}
    </button>
  );
};

export default ToggleTask;
