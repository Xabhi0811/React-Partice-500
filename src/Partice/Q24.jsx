import { useState } from "react";

const UpdateString = () => {
  const [message, setMessage] = useState("Before click");

  return (
    <section>
      <h2>{message}</h2>
      <button onClick={() => setMessage("After click")}>Update message</button>
    </section>
  );
};

export default UpdateString;
