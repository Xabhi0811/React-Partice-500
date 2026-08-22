import { useEffect } from 'react'

const Q138 = () => {
  useEffect(() => {
    const timer = setInterval(() => {}, 1000)
    return () => clearInterval(timer)
  }, [])
  return <p>Subscription cleanup ready</p>
}

export default Q138
