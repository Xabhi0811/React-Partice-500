import { createContext, useContext, useState } from 'react'

const Theme = createContext('light')
const Q182 = () => { const [theme, setTheme] = useState('light'); return <Theme.Provider value={theme}><button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{useContext(Theme)}</button></Theme.Provider> }
export default Q182
