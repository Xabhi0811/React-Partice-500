import { useState } from "react";

const ShowHide = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section>
      <button onClick={() => setIsVisible((current) => !current)}>
        {isVisible ? "Hide" : "Show"} content
      </button>
      {isVisible && <p>This content can be shown or hidden.</p>}
    </section>
  );
};

export default ShowHide;
