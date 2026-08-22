import { useEffect, useState } from 'react'

const Q155 = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    const controller = new AbortController()
    const load = async () => {
      try {
        const response = await fetch('/people.json', { signal: controller.signal })
        if (!response.ok) throw Error('Request failed')
        setData(await response.json())
      } catch (reason) {
        if (reason.name !== 'AbortError') setError(reason.message)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }
    load()
    return () => controller.abort()
  }, [])
  if (loading) return <p>Loading</p>
  if (error) return <p>Error: {error}</p>
  return <ul>{data.map((item, index) => <li key={item.id || index}>{item.name || index}</li>)}</ul>
}

export default Q155
