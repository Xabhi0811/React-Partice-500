import { useEffect, useState } from 'react'

const Q116 = () => {
  const [term, setTerm] = useState('')
  const [data, setData] = useState([])
  useEffect(() => { if (term.trim()) fetch('/people.json').then((response) => response.json()).then(setData) }, [term])
  const results = data.filter((item) => JSON.stringify(item).toLowerCase().includes(term.toLowerCase()))
  return <section><input value={term} onChange={(event) => setTerm(event.target.value)} /><p>{term.trim() ? results.length : 0} matches</p></section>
}

export default Q116
