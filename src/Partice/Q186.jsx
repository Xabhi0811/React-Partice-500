import { createContext, useContext } from 'react'

const User = createContext(null)
const useUser = () => useContext(User)
const Q186 = () => <User.Provider value={{ name: 'Abhi' }}><p>{useUser().name}</p></User.Provider>
export default Q186
