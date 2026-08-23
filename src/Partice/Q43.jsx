import { useState } from "react";

const DisableByCheckbox = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <section>
      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={(event) => setAccepted(event.target.checked)}
        />{" "}
        Accept
      </label>
      <button disabled={!accepted}>Continue</button>
    </section>
  );
};

export default DisableByCheckbox;
