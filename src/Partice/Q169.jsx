import { useEffect, useRef } from 'react'

const Q169 = () => {
  const timer = useRef(null)
  useEffect(() => { timer.current = setInterval(() => {}, 1000); return () => clearInterval(timer.current) }, [])
  return <p>Interval cleared on cleanup</p>
}

export default Q169
