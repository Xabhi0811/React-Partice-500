import { useRef, useState } from 'react'

const Q174 = () => {
  const renders = useRef(0)
  const [value, setValue] = useState(0)
  return <button onClick={() => { renders.current += 1; setValue((current) => current + 1) }}>Value: {value}, render ref stored</button>
}

export default Q174
