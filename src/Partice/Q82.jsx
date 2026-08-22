import { useState } from 'react'

const StateEventsConditional = () => {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(event) => { setName(event.target.value); setSubmitted(false) }} />
      <button type="submit">Save</button>
      {submitted && <p>Hello, {name}</p>}
    </form>
  )
}

export default StateEventsConditional
