import { createContext, useContext, useReducer } from "react";
const AppContext = createContext(null);
function reducer(state, action) {
  if (action.type === "theme") return {
    ...state,
    dark: !state.dark
  };
  if (action.type === "login") return {
    ...state,
    user: "Ada"
  };
  return state;
}
export default function Q369() {
  const [state, dispatch] = useReducer(reducer, {
    dark: false,
    user: null
  });
  return <AppContext.Provider value={{
    state,
    dispatch
  }}><Panel /></AppContext.Provider>;
}
function Panel() {
  const {
    state,
    dispatch
  } = useContext(AppContext);
  return <div style={{
    padding: 8,
    background: state.dark ? "#222" : "#eee",
    color: state.dark ? "white" : "black"
  }}><button onClick={() => dispatch({
      type: "theme"
    })}>Theme</button><button onClick={() => dispatch({
      type: "login"
    })}>Login</button><output>{state.user || "Guest"}</output></div>;
}
