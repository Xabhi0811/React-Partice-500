import { useEffect, useState } from 'react'

const Q129 = () => {
  const [data, setData] = useState([])
  useEffect(() => { fetch('/people.json').then((response) => response.json()).then((value) => setData(value.filter((item) => item.age >= 18))) }, [])
  return <p>Adults: {data.length}</p>
}

export default Q129
