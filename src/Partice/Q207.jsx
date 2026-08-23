import { useReducer } from "react";
const reducer = (state, action) => ({ ...state, [action.name]: action.value });
const Q207 = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", email: "" });
  return (
    <input
      name="name"
      value={state.name}
      onChange={(event) =>
        dispatch({ name: event.target.name, value: event.target.value })
      }
    />
  );
};
export default Q207;
