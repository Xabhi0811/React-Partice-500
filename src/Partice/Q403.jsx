import { createContext, useContext, useState } from "react";
const ThemeContext = createContext(null);
export default function Q403() {
  const [dark, setDark] = useState(false);
  return <ThemeContext.Provider value={{
    dark,
    setDark
  }}><ThemePanel /></ThemeContext.Provider>;
}
function ThemePanel() {
  const {
    dark,
    setDark
  } = useContext(ThemeContext);
  return <button onClick={() => setDark(value => !value)}>{dark ? "Dark" : "Light"} theme</button>;
}
