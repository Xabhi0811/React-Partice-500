import { useState } from 'react'

const MultipleStates = () => {
  const [name, setName] = useState('Abhishek')
  const [age, setAge] = useState(18)

  return (
    <section>
      <p>{name}, {age}</p>
      <button onClick={() => setName('User')}>Change name</button>
      <button onClick={() => setAge((current) => current + 1)}>Increase age</button>
    </section>
  )
}

export default MultipleStates
