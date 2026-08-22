import { useEffect, useRef, useState } from 'react'

const Q168 = () => {
  const timer = useRef(null)
  const [running, setRunning] = useState(false)
  useEffect(() => () => clearInterval(timer.current), [])
  return <button onClick={() => { timer.current = setInterval(() => {}, 1000); setRunning(true) }}>{running ? 'Timer stored' : 'Start timer'}</button>
}

export default Q168
