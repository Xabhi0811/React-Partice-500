import { useEffect, useState } from 'react'

const Q136 = () => {
  const [user, setUser] = useState({ name: 'Abhi', age: 18 })
  useEffect(() => console.log(user.name), [user.name])
  return <button onClick={() => setUser((value) => ({ ...value, age: value.age + 1 }))}>{user.name}</button>
}

export default Q136
