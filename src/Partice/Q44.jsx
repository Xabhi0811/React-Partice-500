import { useState } from "react";

const DisableEmptyInput = () => {
  const [value, setValue] = useState("");

  return (
    <section>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button disabled={!value.trim()}>Submit</button>
    </section>
  );
};

export default DisableEmptyInput;
