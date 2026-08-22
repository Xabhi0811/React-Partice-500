import { useState } from 'react'

const BooleanText = () => {
  const [isOnline, setIsOnline] = useState(false)

  return (
    <section>
      <h2>{isOnline ? 'Online now' : 'Offline now'}</h2>
      <button onClick={() => setIsOnline((current) => !current)}>Change status</button>
    </section>
  )
}

export default BooleanText
