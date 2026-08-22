import { createContext, useContext, useReducer } from 'react'
const Store = createContext(null)
const reducer = (state) => state + 1
const View = () => { const { state, dispatch } = useContext(Store); return <button onClick={dispatch}>{state}</button> }
const Q210 = () => { const value = useReducer(reducer, 0); return <Store.Provider value={{ state: value[0], dispatch: value[1] }}><View /></Store.Provider> }
export default Q210
