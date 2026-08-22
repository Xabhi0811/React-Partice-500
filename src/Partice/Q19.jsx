import { useState } from 'react'

const BooleanState = () => {
  const [isEnabled] = useState(false)

  return (
    <section>
      <h2>Boolean state: {String(isEnabled)}</h2>
    </section>
  )
}

export default BooleanState
