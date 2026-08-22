import { useEffect } from 'react'

const Q84 = () => {
  useEffect(() => {
    document.title = 'Every render'
  })
  return <p>Effect runs after every render</p>
}

export default Q84
