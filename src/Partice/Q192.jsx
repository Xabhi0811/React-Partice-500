import { createContext, useContext } from "react";

const Context = createContext(null);
const useRequired = () => {
  const value = useContext(Context);
  if (value === null) throw Error("Provider required");
  return value;
};
const View = () => <p>{useRequired()}</p>;
const Q192 = () => (
  <Context.Provider value="ready">
    <View />
  </Context.Provider>
);
export default Q192;
