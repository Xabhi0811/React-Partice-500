import { useEffect } from 'react'

const Q133 = () => {
  useEffect(() => console.log('First effect'), [])
  useEffect(() => console.log('Second effect'), [])
  return <p>Two independent effects</p>
}

export default Q133
