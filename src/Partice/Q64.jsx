import { useState } from 'react'

const PersonObjectState = () => {
  const [person] = useState({ name: 'Abhishek', age: 18 })

  return <p>{person.name} is {person.age}</p>
}

export default PersonObjectState
