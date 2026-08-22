import { useState } from 'react'

const PreventDefaultForm = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit without reload</button>
      {submitted && <p>Submitted</p>}
    </form>
  )
}

export default PreventDefaultForm
