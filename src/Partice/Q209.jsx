import { createContext, useContext, useReducer } from "react";
const Context = createContext(null);
const reducer = (state) => state + 1;
const View = () => {
  const { state, dispatch } = useContext(Context);
  return <button onClick={dispatch}>{state}</button>;
};
const Q209 = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <View />
    </Context.Provider>
  );
};
export default Q209;
