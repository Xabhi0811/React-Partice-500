import { useState } from 'react'

const ClearInput = () => {
  const [value, setValue] = useState('')

  return (
    <section>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={() => setValue('')}>Clear</button>
    </section>
  )
}

export default ClearInput
