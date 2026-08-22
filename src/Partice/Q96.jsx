import { useEffect, useState } from 'react'

const Q96 = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Count ${count}`
    return () => { document.title = 'React App' }
  }, [count])
  return <button onClick={() => setCount((value) => value + 1)}>{count}</button>
}

export default Q96
