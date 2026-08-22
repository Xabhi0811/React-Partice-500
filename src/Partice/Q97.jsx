import { useEffect, useState } from 'react'

const Q97 = () => {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setSeconds((value) => value + 1), 1000)
    return () => clearInterval(timer)
  }, [])
  return <p>{seconds}s</p>
}

export default Q97
