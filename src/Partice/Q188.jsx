import { createContext, useContext } from 'react'

const One = createContext('one')
const Two = createContext('two')
const Q188 = () => <One.Provider value="first"><Two.Provider value="second"><p>{useContext(One)} {useContext(Two)}</p></Two.Provider></One.Provider>
export default Q188
