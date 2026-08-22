import { useEffect, useState } from 'react'

const Q113 = () => {
  const [data, setData] = useState([])
  useEffect(() => { const load = async () => { const response = await fetch('/people.json'); setData(await response.json()) }; load() }, [])
  return <p>Inner async function: {data.length}</p>
}

export default Q113
