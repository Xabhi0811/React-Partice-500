import { useState } from 'react'
const useToggle = (initial = false) => { const [value, setValue] = useState(initial); return [value, () => setValue((current) => !current)] }
const Q215 = () => { const [value, toggle] = useToggle(); return <button onClick={toggle}>{String(value)}</button> }
export default Q215
