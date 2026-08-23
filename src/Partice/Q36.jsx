import { useState } from "react";

const SubmitStateValue = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit">Read value</button>
      <p>{result}</p>
    </form>
  );
};

export default SubmitStateValue;
