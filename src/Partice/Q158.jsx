import { useRef } from 'react'

const Q158 = () => {
  const value = useRef(0)
  return <button onClick={() => { value.current += 1; alert(value.current) }}>Change ref</button>
}

export default Q158
