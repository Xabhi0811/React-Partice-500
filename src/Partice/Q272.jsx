import { useState } from "react";

const Q272 = () => {
  const [key, setKey] = useState(1);
  return (
    <section>
      <button onClick={() => setKey((value) => value + 1)}>Reset child</button>
      <p key={key}>Changing the key resets this element</p>
    </section>
  );
};

export default Q272;
