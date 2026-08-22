import { createContext, useContext, useState } from 'react'

const Context = createContext(0)
const Q190 = () => { const [value, setValue] = useState(0); return <Context.Provider value={value}><button onClick={() => setValue(value + 1)}>{useContext(Context)}</button></Context.Provider> }
export default Q190
