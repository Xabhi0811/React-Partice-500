import { useState } from "react";

const EventArgument = () => {
  const [message, setMessage] = useState("");
  const choose = (value) => setMessage(value);

  return (
    <button onClick={() => choose("Selected")}>{message || "Choose"}</button>
  );
};

export default EventArgument;
