import { useEffect, useState } from 'react'

const Q100 = () => {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1000)
    return () => clearTimeout(timer)
  }, [])
  return <p>{ready ? 'Timeout complete' : 'Waiting'}</p>
}

export default Q100
