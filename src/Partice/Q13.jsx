import { useState } from 'react'

const DecrementCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h2>Decrement by 1: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </section>
  )
}

export default DecrementCounter
