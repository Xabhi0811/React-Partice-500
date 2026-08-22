import { createContext, useContext, useState } from 'react'

const Context = createContext(null)
const Q181 = () => { const [value, setValue] = useState(0); return <Context.Provider value={{ value, setValue }}><button onClick={() => setValue(value + 1)}>{useContext(Context).value}</button></Context.Provider> }
export default Q181
