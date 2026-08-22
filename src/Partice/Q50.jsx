import { useState } from 'react'

const ObjectFormState = () => {
  const [form, setForm] = useState({ name: '', email: '' })

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  return (
    <form>
      <input name="name" value={form.name} onChange={updateField} placeholder="Name" />
      <input name="email" value={form.email} onChange={updateField} placeholder="Email" />
    </form>
  )
}

export default ObjectFormState
