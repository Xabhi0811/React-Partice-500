import { useRef } from 'react'

const Q162 = () => {
  const input = useRef(null)
  return <section><input ref={input} /><button onClick={() => input.current.focus()}>Focus</button></section>
}

export default Q162
