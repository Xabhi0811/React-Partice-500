import { useEffect, useState } from 'react'

const Q88 = () => {
  const [count, setCount] = useState(0)
  useEffect(() => console.log('Runs on mount and updates'), [count])
  return <button onClick={() => setCount((value) => value + 1)}>{count}</button>
}

export default Q88
