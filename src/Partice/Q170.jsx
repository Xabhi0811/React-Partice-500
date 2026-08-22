import { useEffect, useRef, useState } from 'react'

const Q170 = () => {
  const timer = useRef(null)
  const [count, setCount] = useState(0)
  useEffect(() => { timer.current = setInterval(() => setCount((value) => value + 1), 1000); return () => clearInterval(timer.current) }, [])
  return <p>{count}</p>
}

export default Q170
