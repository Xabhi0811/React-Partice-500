import { useState } from "react";

const RequiredValidation = () => {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">Submit</button>
      {submitted && value && <p>Valid</p>}
    </form>
  );
};

export default RequiredValidation;
