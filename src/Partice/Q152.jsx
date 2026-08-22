import { useEffect, useState } from 'react'

const Q152 = () => {
  const [value, setValue] = useState(false)
  useEffect(() => console.log('Boolean effect', value), [value])
  return <button onClick={() => setValue((current) => !current)}>{String(value)}</button>
}

export default Q152
