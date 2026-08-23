import { useReducer } from "react";
const Q197 = () => {
  const [state, dispatch] = useReducer((value, action) => value + action, 0);
  return <button onClick={() => dispatch(1)}>{state}</button>;
};
export default Q197;
