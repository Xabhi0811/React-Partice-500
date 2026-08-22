import { createContext, useContext, useReducer } from 'react'

const Context = createContext(null)
const reducer = (state, action) => action.type === 'inc' ? state + 1 : state
const Q191 = () => { const [state, dispatch] = useReducer(reducer, 0); return <Context.Provider value={{ state, dispatch }}><button onClick={() => dispatch({ type: 'inc' })}>{useContext(Context).state}</button></Context.Provider> }
export default Q191
