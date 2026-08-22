import { useRef, useState } from 'react'

const Q159 = () => {
  const ref = useRef(0)
  const [renders, setRenders] = useState(0)
  return <button onClick={() => { ref.current += 1; setRenders((value) => value + 1) }}>Ref changed, renders: {renders}</button>
}

export default Q159
