import { useState } from 'react'
const usePair = () => { const [value, setValue] = useState('one'); return { value, setValue, ready: true } }
const Q227 = () => { const state = usePair(); return <button onClick={() => state.setValue('two')}>{state.value} {String(state.ready)}</button> }
export default Q227
