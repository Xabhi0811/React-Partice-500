import { createContext, useContext, useReducer } from "react";
const LoadingContext = createContext(null);
function reducer(count, action) {
  return action === "start" ? count + 1 : Math.max(0, count - 1);
}
export default function Q434() {
  const [count, dispatch] = useReducer(reducer, 0);
  return <LoadingContext.Provider value={dispatch}><Panel count={count} /></LoadingContext.Provider>;
}
function Panel({
  count
}) {
  const dispatch = useContext(LoadingContext);
  return <button onClick={() => dispatch(count ? "stop" : "start")}>Loading: {String(Boolean(count))}</button>;
}
