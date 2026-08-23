import { useState } from "react";

const PasswordInput = () => {
  const [password, setPassword] = useState("");

  return (
    <input
      type="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
  );
};

export default PasswordInput;
