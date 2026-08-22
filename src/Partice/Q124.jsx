import { useEffect, useState } from 'react'

const Q124 = () => {
  const [data, setData] = useState([])
  useEffect(() => { fetch('/people.json').then((response) => { if (!response.ok) throw Error('Not OK'); return response.json() }).then(setData).catch(() => setData([])) }, [])
  return <p>{data.length}</p>
}

export default Q124
