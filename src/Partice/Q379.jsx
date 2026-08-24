import { useReducer } from "react";
export default function Q379() {
  const [state, dispatch] = useReducer((value, action) => action === "add" ? value + 1 : value * 2, 1);
  return <div><button onClick={() => dispatch("add")}>Add</button><button onClick={() => dispatch("double")}>Double</button><output>Final state: {state}</output></div>;
}
