import { createContext, useContext } from 'react'

const Context = createContext({ name: '' })
const Q180 = () => <Context.Provider value={{ name: 'Abhi' }}><p>{useContext(Context).name}</p></Context.Provider>
export default Q180
