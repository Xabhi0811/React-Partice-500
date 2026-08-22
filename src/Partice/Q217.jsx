import { useState } from 'react'
const useInput = (initial = '') => { const [value, setValue] = useState(initial); return { value, onChange: (event) => setValue(event.target.value) } }
const Q217 = () => { const input = useInput(); return <input {...input} /> }
export default Q217
