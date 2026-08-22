import { useReducer } from 'react'
const initial = { name: '', email: '' }
const reducer = (state, action) => action.type === 'reset' ? initial : { ...state, [action.name]: action.value }
const Q208 = () => { const [state, dispatch] = useReducer(reducer, initial); return <button onClick={() => dispatch({ type: 'reset' })}>{state.name || 'Reset form'}</button> }
export default Q208
