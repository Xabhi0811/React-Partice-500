import { useEffect, useState } from 'react'

const Q87 = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Abhi')
  useEffect(() => console.log(count, name), [count, name])
  return <button onClick={() => { setCount((value) => value + 1); setName('User') }}>{count} {name}</button>
}

export default Q87
