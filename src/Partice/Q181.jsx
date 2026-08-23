import { createContext, useContext, useState } from "react";

const Context = createContext(null);
const Counter = () => {
  const { value, setValue } = useContext(Context);
  return <button onClick={() => setValue(value + 1)}>{value}</button>;
};

const Q181 = () => {
  const [value, setValue] = useState(0);
  return (
    <Context.Provider value={{ value, setValue }}>
      <Counter />
    </Context.Provider>
  );
};
export default Q181;
