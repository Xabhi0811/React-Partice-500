import { createContext, useContext } from 'react'

const Theme = createContext('light')
const Q183 = () => <Theme.Provider value="dark"><p>Theme: {useContext(Theme)}</p></Theme.Provider>
export default Q183
