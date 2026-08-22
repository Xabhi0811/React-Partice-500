import { useEffect, useState } from 'react'

const Q104 = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const update = () => setWidth(window.innerWidth)
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return <p>Width: {width}</p>
}

export default Q104
