import { createContext, useContext } from "react";

const Theme = createContext("light");
const View = () => <p>Theme: {useContext(Theme)}</p>;
const Q183 = () => (
  <Theme.Provider value="dark">
    <View />
  </Theme.Provider>
);
export default Q183;
