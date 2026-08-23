import { useState } from "react";

const ShowHidePassword = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <section>
      <input
        type={visible ? "text" : "password"}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="button" onClick={() => setVisible((current) => !current)}>
        {visible ? "Hide" : "Show"}
      </button>
    </section>
  );
};

export default ShowHidePassword;
