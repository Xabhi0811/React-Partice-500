import { useEffect, useState } from 'react'

const Q121 = () => {
  const [result, setResult] = useState([])
  useEffect(() => { Promise.all([fetch('/people.json'), fetch('/people.json')]).then((responses) => Promise.all(responses.map((response) => response.json()))).then(setResult) }, [])
  return <p>Requests: {result.length}</p>
}

export default Q121
