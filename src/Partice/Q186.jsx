import { createContext, useContext } from "react";

const User = createContext(null);
const useUser = () => useContext(User);
const View = () => <p>{useUser().name}</p>;
const Q186 = () => (
  <User.Provider value={{ name: "Abhi" }}>
    <View />
  </User.Provider>
);
export default Q186;
