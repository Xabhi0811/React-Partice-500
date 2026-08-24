import { useReducer } from "react";
export default function Q422() {
  const [value, dispatch] = useReducer((state, action) => action.type === "increment" ? state + 1 : state, 0);
  return <button onClick={() => dispatch({
    type: "increment"
  })}>Reducer value: {value}</button>;
}
