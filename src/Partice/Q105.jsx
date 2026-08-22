import { useEffect } from 'react'

const Q105 = () => {
  useEffect(() => {
    const handler = () => document.title = `${window.innerWidth}px`
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return <p>Width updates on resize</p>
}

export default Q105
