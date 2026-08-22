import { useState } from 'react'

const NestedObjectUpdate = () => {
  const [user, setUser] = useState({ name: 'Abhishek', address: { city: 'Bhopal' } })

  return <button onClick={() => setUser((current) => ({ ...current, address: { ...current.address, city: 'Indore' } }))}>{user.address.city}</button>
}

export default NestedObjectUpdate
