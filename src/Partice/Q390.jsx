import { useReducer } from "react";
export default function Q390() {
  const [step, dispatch] = useReducer((value, action) => action === "next" ? Math.min(value + 1, 3) : Math.max(value - 1, 1), 1);
  return <div><button onClick={() => dispatch("back")}>Back</button><output>Step {step} of 3</output><button onClick={() => dispatch("next")}>Next</button></div>;
}
