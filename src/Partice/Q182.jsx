import { createContext, useContext, useState } from "react";

const Theme = createContext("light");
const ThemeButton = () => {
  const theme = useContext(Theme);
  return <span>{theme}</span>;
};

const Q182 = () => {
  const [theme, setTheme] = useState("light");
  return (
    <Theme.Provider value={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <ThemeButton />
      </button>
    </Theme.Provider>
  );
};
export default Q182;
