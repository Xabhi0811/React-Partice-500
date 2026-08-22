import { useState } from 'react'

const ResetCounter = () => {
  const [count, setCount] = useState(10)

  return (
    <section>
      <h2>Reset counter: {count}</h2>
      <button onClick={() => setCount(0)}>Reset</button>
    </section>
  )
}

export default ResetCounter
