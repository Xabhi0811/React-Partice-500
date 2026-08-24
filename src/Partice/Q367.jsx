import { useReducer } from "react";
function reducer(count, action) {
  if (action.type === "increment") return count + 1;
  if (action.type === "decrement") return count - 1;
  return 0;
}
export default function Q367() {
  const [count, dispatch] = useReducer(reducer, 0);
  return <div><button onClick={() => dispatch({
      type: "decrement"
    })}>-</button><output>{count}</output><button onClick={() => dispatch({
      type: "increment"
    })}>+</button><button onClick={() => dispatch({
      type: "reset"
    })}>Reset</button></div>;
}
