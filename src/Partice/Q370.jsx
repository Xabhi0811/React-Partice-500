import { useReducer } from "react";
function reducer(state, action) {
  if (action.type === "rename") return {
    ...state,
    name: action.name
  };
  return state;
}
export default function Q370() {
  const [person, dispatch] = useReducer(reducer, {
    name: "Ada",
    role: "Engineer"
  });
  return <div><input value={person.name} onChange={event => dispatch({
      type: "rename",
      name: event.target.value
    })} /><output>{person.name} - {person.role}</output></div>;
}
