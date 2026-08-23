import { useState } from "react";

const ClearErrorOnType = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("Required");

  return (
    <section>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setError("");
        }}
      />
      {error && <p>{error}</p>}
    </section>
  );
};

export default ClearErrorOnType;
