import { createContext, useContext } from 'react'

const User = createContext(null)
const useUser = () => { const value = useContext(User); if (!value) throw Error('useUser must be inside UserProvider'); return value }
const Q187 = () => <User.Provider value={{ name: 'Abhi' }}><p>{useUser().name}</p></User.Provider>
export default Q187
