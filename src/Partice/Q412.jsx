import { useReducer } from "react";
export default function Q412() {
  const [toasts, dispatch] = useReducer((list, action) => action === "add" ? [...list, `Toast ${list.length + 1}`] : list.slice(1), []);
  return <div><button onClick={() => dispatch("add")}>Add toast</button><button onClick={() => dispatch("remove")}>Dismiss</button><output>{toasts.join(", ")}</output></div>;
}
