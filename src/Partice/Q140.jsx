import { useEffect } from 'react'

const Q140 = () => {
  useEffect(() => console.log('Strict Mode may run setup and cleanup twice in development'), [])
  return <p>Strict Mode development check</p>
}

export default Q140
