import { useReducer } from "react";
export default function Q440() {
  const [state, dispatch] = useReducer((value, action) => ({
    ...value,
    [action.field]: action.value
  }), {
    name: "Ada",
    count: 0
  });
  return <div><button onClick={() => dispatch({
      field: "count",
      value: state.count + 1
    })}>Count {state.count}</button><input value={state.name} onChange={event => dispatch({
      field: "name",
      value: event.target.value
    })} /></div>;
}
