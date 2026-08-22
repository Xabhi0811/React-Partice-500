import { useReducer } from 'react'
const reducer = (state, action) => action.type === 'remove' ? state.filter((item) => item !== action.value) : state
const Q204 = () => { const [state, dispatch] = useReducer(reducer, ['One', 'Two']); return <button onClick={() => dispatch({ type: 'remove', value: 'One' })}>{state.join(', ')}</button> }
export default Q204
