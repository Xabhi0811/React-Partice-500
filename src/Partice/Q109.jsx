import { useEffect, useState } from 'react'

const Q109 = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => { const timer = setTimeout(() => setLoading(false), 300); return () => clearTimeout(timer) }, [])
  return <p>{loading ? 'Loading' : 'Loaded'}</p>
}

export default Q109
