import { createContext, useContext, useReducer } from "react";

const Context = createContext(null);
const reducer = (state, action) => (action.type === "inc" ? state + 1 : state);
const View = () => {
  const { state, dispatch } = useContext(Context);
  return <button onClick={() => dispatch({ type: "inc" })}>{state}</button>;
};
const Q191 = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <View />
    </Context.Provider>
  );
};
export default Q191;
