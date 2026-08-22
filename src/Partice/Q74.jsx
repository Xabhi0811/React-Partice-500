import { useState } from 'react'

const EventObject = () => {
  const [type, setType] = useState('')

  const handleChange = (event) => setType(event.type)

  return <input onChange={handleChange} placeholder={type || 'Type here'} />
}

export default EventObject
