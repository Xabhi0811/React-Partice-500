import { useEffect, useState } from 'react'

const Q125 = () => {
  const [data, setData] = useState([])
  useEffect(() => { fetch('/people.json').then((response) => response.json()).then((value) => setData(value)) }, [])
  return <p>{data.length}</p>
}

export default Q125
