import { useReducer } from 'react'
const reducer = (state, action) => ({ ...state, [action.name]: action.value })
const Q212 = () => { const [state, dispatch] = useReducer(reducer, { name: '', age: 0 }); return <button onClick={() => dispatch({ name: 'name', value: 'User' })}>{state.name || state.age}</button> }
export default Q212
