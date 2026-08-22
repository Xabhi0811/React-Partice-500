import { createContext, useContext } from 'react'

const Context = createContext('')
const Q179 = () => <Context.Provider value="Hello"><p>{useContext(Context)}</p></Context.Provider>
export default Q179
