import { useState } from 'react'

const ControlledInput = () => {
  const [name, setName] = useState('')

  return (
    <section>
      <label>
        Name
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <p>Hello, {name || 'guest'}</p>
    </section>
  )
}

export default ControlledInput
