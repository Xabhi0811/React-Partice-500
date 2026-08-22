import { useEffect } from 'react'

const Q102 = () => {
  useEffect(() => {
    const handler = () => console.log('event')
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [])
  return <p>Event listener active</p>
}

export default Q102
