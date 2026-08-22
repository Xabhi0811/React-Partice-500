import { useEffect, useState } from 'react'

const Q107 = () => {
  const [data, setData] = useState([])
  useEffect(() => { fetch('/people.json').then((response) => response.json()).then(setData) }, [])
  return <p>Local data: {data.length}</p>
}

export default Q107
