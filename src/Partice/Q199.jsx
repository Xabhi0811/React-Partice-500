import { useReducer } from "react";
const reducer = (state, action) =>
  action.type === "add" ? state + action.payload : state;
const Q199 = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <button onClick={() => dispatch({ type: "add", payload: 5 })}>
      {state}
    </button>
  );
};
export default Q199;
