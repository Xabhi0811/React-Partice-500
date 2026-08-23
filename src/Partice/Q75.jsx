import { useState } from "react";

const EventTargetValue = () => {
  const [value, setValue] = useState("");

  return (
    <input value={value} onChange={(event) => setValue(event.target.value)} />
  );
};

export default EventTargetValue;
