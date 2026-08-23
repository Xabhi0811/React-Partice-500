import { createContext, useContext } from "react";

const Context = createContext("");
const View = () => <p>{useContext(Context)}</p>;
const Q179 = () => (
  <Context.Provider value="Hello">
    <View />
  </Context.Provider>
);
export default Q179;
