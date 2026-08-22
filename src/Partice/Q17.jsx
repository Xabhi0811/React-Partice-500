import { useState } from 'react'

const ThreeUpdates = () => {
  const [count, setCount] = useState(0)

  const incrementThreeTimes = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  return (
    <section>
      <h2>Three direct updates: {count}</h2>
      <p>React batches these calls, so they use the same current count.</p>
      <button onClick={incrementThreeTimes}>Add three</button>
    </section>
  )
}

export default ThreeUpdates
