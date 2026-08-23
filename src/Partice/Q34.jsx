import { useState } from "react";

const ControlledFormSubmit = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button type="submit">Submit</button>
      <p>{submitted}</p>
    </form>
  );
};

export default ControlledFormSubmit;
