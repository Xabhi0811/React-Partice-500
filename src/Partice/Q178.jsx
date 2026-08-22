import { createContext, useContext } from 'react'

const Context = createContext('value')
const Q178 = () => <Context.Provider value="read"><p>{useContext(Context)}</p></Context.Provider>
export default Q178
