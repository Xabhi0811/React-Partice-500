import { createContext, useContext, useState } from "react";
const CountContext = createContext(null);
export default function Q450() {
  const [count, setCount] = useState(0);
  return <CountContext.Provider value={count}><button onClick={() => setCount(value => value + 1)}>Shared count: {useContext(CountContext)}</button></CountContext.Provider>;
}
