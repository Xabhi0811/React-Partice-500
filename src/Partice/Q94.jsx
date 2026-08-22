import { useEffect } from 'react'

const Q94 = () => {
  useEffect(() => console.log('Component mounted'), [])
  return <p>Mounted</p>
}

export default Q94
