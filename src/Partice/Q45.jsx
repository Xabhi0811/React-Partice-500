import { useState } from 'react'

const EnableWithText = () => {
  const [value, setValue] = useState('')

  return (
    <section>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button disabled={!value.trim()}>Enabled with text</button>
    </section>
  )
}

export default EnableWithText
