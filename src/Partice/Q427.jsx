import { createContext, useContext, useState } from "react";
const TabsContext = createContext(null);
export default function Q427() {
  const [active, setActive] = useState("one");
  return <TabsContext.Provider value={{
    active,
    setActive
  }}><Tabs /></TabsContext.Provider>;
}
function Tabs() {
  const {
    active,
    setActive
  } = useContext(TabsContext);
  return <div><button onClick={() => setActive("one")}>One</button><button onClick={() => setActive("two")}>Two</button><output>Active: {active}</output></div>;
}
