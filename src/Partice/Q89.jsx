import { useEffect, useState } from 'react'

const Q89 = () => {
  const [count, setCount] = useState(0)
  useEffect(() => console.log('Correct dependency', count), [count])
  return <button onClick={() => setCount((value) => value + 1)}>{count}</button>
}

export default Q89
