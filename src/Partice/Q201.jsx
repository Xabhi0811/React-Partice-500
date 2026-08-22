import { useReducer } from 'react'
const reducer = (state, action) => action.type === 'name' ? { ...state, name: action.value } : state
const Q201 = () => { const [state, dispatch] = useReducer(reducer, { name: 'Abhi', age: 18 }); return <button onClick={() => dispatch({ type: 'name', value: 'User' })}>{state.name} {state.age}</button> }
export default Q201
