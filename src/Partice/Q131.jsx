import { useEffect, useState } from 'react'

const Q131 = () => {
  const [id, setId] = useState(1)
  useEffect(() => console.log('Selected ID', id), [id])
  return <button onClick={() => setId((value) => value + 1)}>Selected: {id}</button>
}

export default Q131
