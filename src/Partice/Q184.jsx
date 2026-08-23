import { createContext, useState } from "react";

const Theme = createContext(null);
const Q184 = () => {
  const [dark, setDark] = useState(false);
  return (
    <Theme.Provider value={{ dark, setDark }}>
      <button onClick={() => setDark((value) => !value)}>
        {dark ? "Dark" : "Light"}
      </button>
    </Theme.Provider>
  );
};
export default Q184;
