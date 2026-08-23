import { useReducer } from "react";
const reducer = (state, action) =>
  state.map((item) => (item === action.old ? action.value : item));
const Q205 = () => {
  const [state, dispatch] = useReducer(reducer, ["Old"]);
  return (
    <button onClick={() => dispatch({ old: "Old", value: "New" })}>
      {state}
    </button>
  );
};
export default Q205;
