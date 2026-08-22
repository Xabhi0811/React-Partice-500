import { createContext, useContext } from 'react'

const Context = createContext(null)
const useRequired = () => { const value = useContext(Context); if (value === null) throw Error('Provider required'); return value }
const Q192 = () => <Context.Provider value="ready"><p>{useRequired()}</p></Context.Provider>
export default Q192
