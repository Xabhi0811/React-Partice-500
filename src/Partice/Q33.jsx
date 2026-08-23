import { useState } from "react";

const SelectedOption = () => {
  const [option, setOption] = useState("small");

  return (
    <section>
      <select
        value={option}
        onChange={(event) => setOption(event.target.value)}
      >
        <option value="small">Small</option>
        <option value="large">Large</option>
      </select>
      <p>Selected: {option}</p>
    </section>
  );
};

export default SelectedOption;
