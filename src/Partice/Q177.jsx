import { createContext } from 'react'

const Context = createContext('value')
const Q177 = () => <Context.Provider value="provided"><p>Provider</p></Context.Provider>
export default Q177
