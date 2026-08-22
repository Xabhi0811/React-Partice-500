import { useEffect, useState } from 'react'

const Q92 = () => {
  const [value, setValue] = useState('one')
  useEffect(() => console.log('Value changed', value), [value])
  return <button onClick={() => setValue('two')}>{value}</button>
}

export default Q92
