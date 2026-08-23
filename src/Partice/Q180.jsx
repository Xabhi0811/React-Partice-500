import { createContext, useContext } from "react";

const Context = createContext({ name: "" });
const View = () => <p>{useContext(Context).name}</p>;
const Q180 = () => (
  <Context.Provider value={{ name: "Abhi" }}>
    <View />
  </Context.Provider>
);
export default Q180;
