import { createContext, useContext } from "react";

const Context = createContext("value");
const View = () => <p>{useContext(Context)}</p>;
const Q178 = () => (
  <Context.Provider value="read">
    <View />
  </Context.Provider>
);
export default Q178;
