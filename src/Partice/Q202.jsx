import { useReducer } from 'react'
const Q202 = () => { const [state, dispatch] = useReducer((value, action) => action.type === 'age' ? { ...value, age: value.age + 1 } : value, { name: 'Abhi', age: 18 }); return <button onClick={() => dispatch({ type: 'age' })}>{state.name}: {state.age}</button> }
export default Q202
