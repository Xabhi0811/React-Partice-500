import { createContext, useContext } from "react";

const User = createContext({ name: "Guest" });
const View = () => <p>{useContext(User).name}</p>;
const Q185 = () => (
  <User.Provider value={{ name: "Abhi" }}>
    <View />
  </User.Provider>
);
export default Q185;
