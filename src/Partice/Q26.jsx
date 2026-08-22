import { useState } from 'react'

const InputOnChange = () => {
  const [value, setValue] = useState('')

  return <input value={value} onChange={(event) => setValue(event.target.value)} />
}

export default InputOnChange
