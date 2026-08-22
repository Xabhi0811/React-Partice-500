import { useState } from 'react'
const useCounter = (initial = 0) => { const [count, setCount] = useState(initial); return { count, increment: () => setCount((value) => value + 1) } }
const Q216 = () => { const { count, increment } = useCounter(); return <button onClick={increment}>{count}</button> }
export default Q216
