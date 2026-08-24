import { createContext, useContext, useReducer } from "react";
const AuthContext = createContext(null);
function reducer(state, action) {
  return action === "login" ? {
    user: "Ada"
  } : {
    user: null
  };
}
export default function Q388() {
  const [state, dispatch] = useReducer(reducer, {
    user: null
  });
  return <AuthContext.Provider value={{
    state,
    dispatch
  }}><AuthPanel /></AuthContext.Provider>;
}
function AuthPanel() {
  const {
    state,
    dispatch
  } = useContext(AuthContext);
  return <button onClick={() => dispatch(state.user ? "logout" : "login")}>{state.user || "Login"}</button>;
}
