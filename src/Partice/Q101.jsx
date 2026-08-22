import { useEffect, useState } from 'react'

const Q101 = () => {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1000)
    return () => clearTimeout(timer)
  }, [])
  return <p>{ready ? 'Done' : 'Timeout cleaned up'}</p>
}

export default Q101
