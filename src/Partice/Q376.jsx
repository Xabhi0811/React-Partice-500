import { createContext, useContext, useReducer } from "react";
const ValueContext = createContext(0);
const DispatchContext = createContext(() => {});
export default function Q376() {
  const [value, dispatch] = useReducer(count => count + 1, 0);
  return <ValueContext.Provider value={value}><DispatchContext.Provider value={dispatch}><Panel /></DispatchContext.Provider></ValueContext.Provider>;
}
function Panel() {
  const value = useContext(ValueContext);
  const dispatch = useContext(DispatchContext);
  return <button onClick={dispatch}>Value: {value}</button>;
}
