import { useState } from "react";

const NameEmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
    </form>
  );
};

export default NameEmailForm;
