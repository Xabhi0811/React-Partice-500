import { useState } from 'react'

const ThreeInputForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')

  return (
    <form>
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
      <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
      <input value={city} onChange={(event) => setCity(event.target.value)} placeholder="City" />
    </form>
  )
}

export default ThreeInputForm
