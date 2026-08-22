import { useReducer } from 'react'
const reducer = (state, action) => state + (action.payload || 0)
const Q200 = () => { const [state, dispatch] = useReducer(reducer, 0); return <button onClick={() => dispatch({ payload: 3 })}>{state}</button> }
export default Q200
