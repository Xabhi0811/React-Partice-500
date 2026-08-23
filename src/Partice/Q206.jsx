import { useReducer } from "react";
const reducer = (state) => !state;
const Q206 = () => {
  const [state, dispatch] = useReducer(reducer, false);
  return <button onClick={dispatch}>{String(state)}</button>;
};
export default Q206;
