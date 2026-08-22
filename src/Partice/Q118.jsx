import { useEffect, useState } from 'react'

const Q118 = () => {
  const [data, setData] = useState([])
  useEffect(() => { const controller = new AbortController(); fetch('/people.json', { signal: controller.signal }).then((response) => response.json()).then(setData).catch(() => {}); return () => controller.abort() }, [])
  return <p>Abortable request: {data.length}</p>
}

export default Q118
