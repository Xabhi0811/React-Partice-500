import { useEffect } from 'react'

const Q90 = () => {
  useEffect(() => console.log('No dependency array: every render'))
  return <p>useEffect callback without array runs after every render</p>
}

export default Q90
