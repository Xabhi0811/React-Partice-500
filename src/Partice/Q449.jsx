import { useReducer } from "react";
export default function Q449() {
  const [step, dispatch] = useReducer((value, action) => action === "next" ? Math.min(3, value + 1) : Math.max(1, value - 1), 1);
  return <div><button onClick={() => dispatch("back")}>Back</button><output>Validated step {step}</output><button onClick={() => dispatch("next")}>Next</button></div>;
}
