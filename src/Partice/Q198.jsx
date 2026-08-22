import { useReducer } from 'react'
const reducer = (state, action) => ({ ...state, [action.type]: !state[action.type] })
const Q198 = () => { const [state, dispatch] = useReducer(reducer, { one: false, two: false }); return <button onClick={() => dispatch({ type: 'one' })}>{String(state.one)}</button> }
export default Q198
