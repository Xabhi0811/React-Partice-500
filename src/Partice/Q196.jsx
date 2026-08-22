import { useReducer } from 'react'
const reducer = (state, action) => action.type === 'reset' ? 0 : state
const Q196 = () => { const [state, dispatch] = useReducer(reducer, 10); return <button onClick={() => dispatch({ type: 'reset' })}>{state}</button> }
export default Q196
