import { useEffect, useState } from 'react'

const Q153 = () => {
  const [user, setUser] = useState({ name: 'Abhi', age: 18 })
  useEffect(() => console.log(user.age), [user.age])
  return <button onClick={() => setUser((current) => ({ ...current, age: current.age + 1 }))}>{user.age}</button>
}

export default Q153
