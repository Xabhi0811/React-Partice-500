import { useReducer } from "react";
const initial = {
  name: "",
  email: ""
};
function reducer(state, action) {
  if (action.type === "change") return {
    ...state,
    [action.field]: action.value
  };
  return initial;
}
export default function Q368() {
  const [form, dispatch] = useReducer(reducer, initial);
  return <form onSubmit={event => event.preventDefault()}><input value={form.name} onChange={event => dispatch({
      type: "change",
      field: "name",
      value: event.target.value
    })} placeholder="Name" /><input value={form.email} onChange={event => dispatch({
      type: "change",
      field: "email",
      value: event.target.value
    })} placeholder="Email" /><button onClick={() => dispatch({
      type: "reset"
    })}>Reset</button><output>{form.name} {form.email}</output></form>;
}
