import { createContext, useContext } from "react";

const One = createContext("one");
const Two = createContext("two");
const View = () => (
  <p>
    {useContext(One)} {useContext(Two)}
  </p>
);
const Q188 = () => (
  <One.Provider value="first">
    <Two.Provider value="second">
      <View />
    </Two.Provider>
  </One.Provider>
);
export default Q188;
