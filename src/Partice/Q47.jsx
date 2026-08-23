import { useState } from "react";

const EmptyInputError = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value.trim()) setError("This field is required");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit">Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default EmptyInputError;
