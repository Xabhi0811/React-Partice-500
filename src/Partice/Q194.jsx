import { useReducer } from 'react'
const reducer = (state, action) => action.type === 'inc' ? state + 1 : state
const Q194 = () => { const [state, dispatch] = useReducer(reducer, 0); return <button onClick={() => dispatch({ type: 'inc' })}>{state}</button> }
export default Q194
