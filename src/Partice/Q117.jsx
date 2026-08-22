import { useEffect, useState } from 'react'

const Q117 = () => {
  const [term, setTerm] = useState('')
  useEffect(() => { if (term.trim()) console.log('Fetching', term) }, [term])
  return <input value={term} onChange={(event) => setTerm(event.target.value)} placeholder="Search" />
}

export default Q117
