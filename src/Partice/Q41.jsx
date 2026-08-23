import { useState } from "react";

const CharacterCounter = () => {
  const [value, setValue] = useState("");

  return (
    <section>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        maxLength={50}
      />
      <p>{value.length}/50</p>
    </section>
  );
};

export default CharacterCounter;
