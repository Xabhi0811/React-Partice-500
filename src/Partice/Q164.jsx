import { useRef } from 'react'

const Q164 = () => {
  const input = useRef(null)
  return <section><input ref={input} /><button onClick={() => input.current.focus()}>Focus after click</button></section>
}

export default Q164
