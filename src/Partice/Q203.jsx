import { useReducer } from 'react'
const reducer = (state, action) => action.type === 'add' ? [...state, action.value] : state
const Q203 = () => { const [state, dispatch] = useReducer(reducer, []); return <button onClick={() => dispatch({ type: 'add', value: 'Item' })}>{state.join(', ')}</button> }
export default Q203
