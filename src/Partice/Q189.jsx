import { createContext, useContext } from 'react'

const One = createContext('one')
const Two = createContext('two')
const Q189 = () => <p>{useContext(One)} and {useContext(Two)}</p>
export default Q189
