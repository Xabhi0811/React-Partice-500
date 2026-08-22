import { useEffect, useState } from 'react'

const Q115 = () => {
  const [id, setId] = useState(1)
  useEffect(() => console.log('Fetch for id', id), [id])
  return <button onClick={() => setId((value) => value + 1)}>ID: {id}</button>
}

export default Q115
