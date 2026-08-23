import { createContext, useContext } from "react";

const User = createContext(null);
const useUser = () => {
  const value = useContext(User);
  if (!value) throw Error("useUser must be inside UserProvider");
  return value;
};
const View = () => <p>{useUser().name}</p>;
const Q187 = () => (
  <User.Provider value={{ name: "Abhi" }}>
    <View />
  </User.Provider>
);
export default Q187;
