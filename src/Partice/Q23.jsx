import { useState } from 'react'

const StringState = () => {
  const [message] = useState('Ready')

  return (
    <section>
      <h2>{message}</h2>
    </section>
  )
}

export default StringState
