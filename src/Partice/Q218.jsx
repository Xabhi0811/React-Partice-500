import { useState } from 'react'
const useBoolean = (initial = false) => { const [value, setValue] = useState(initial); return { value, setValue } }
const Q218 = () => { const state = useBoolean(); return <button onClick={() => state.setValue((value) => !value)}>{String(state.value)}</button> }
export default Q218
