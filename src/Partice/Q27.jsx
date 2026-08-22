import { useState } from 'react'

const DisplayInputValue = () => {
  const [value, setValue] = useState('')

  return (
    <section>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <p>{value}</p>
    </section>
  )
}

export default DisplayInputValue
