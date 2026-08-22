import { useEffect, useState } from 'react'

const Q112 = () => {
  const [data, setData] = useState([])
  useEffect(() => { const load = async () => { const response = await fetch('/people.json'); setData(await response.json()) }; load() }, [])
  return <p>{data.length} records</p>
}

export default Q112
