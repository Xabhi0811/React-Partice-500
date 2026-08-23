import { useState } from "react";

const Adult = () => {
  const [age, setAge] = useState("");
  return (
    <div>
      <h1>Age Checker</h1>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      ></input>
      {age >= 18 && <h2>Adult</h2>}
    </div>
  );
};

export default Adult;
