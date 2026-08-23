import { useReducer } from "react";
const reducer = (state, action) => (action.type === "dec" ? state - 1 : state);
const Q195 = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return <button onClick={() => dispatch({ type: "dec" })}>{state}</button>;
};
export default Q195;
