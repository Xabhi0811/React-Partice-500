import { createContext, useContext } from 'react'

const User = createContext({ name: 'Guest' })
const Q185 = () => <User.Provider value={{ name: 'Abhi' }}><p>{useContext(User).name}</p></User.Provider>
export default Q185
