import { useState } from 'react'

const FunctionalCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h2>Functional counter: {count}</h2>
      <button onClick={() => setCount((current) => current + 1)}>Increment</button>
    </section>
  )
}

export default FunctionalCounter
