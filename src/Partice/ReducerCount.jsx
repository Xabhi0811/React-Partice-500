import { useReducer } from "react";

const ReducerCount = () => {
  const reducer = (state, action) =>
    action.type === "reset" ? 0 : state + action.amount;
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <output>{count}</output>
      <button onClick={() => dispatch({ type: "change", amount: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "change", amount: -1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default ReducerCount;
