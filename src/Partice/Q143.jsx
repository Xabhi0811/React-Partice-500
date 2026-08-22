import { useEffect, useState } from 'react'

const Q143 = () => {
  const [username, setUsername] = useState('Abhi')
  useEffect(() => console.log('Username', username), [username])
  return <button onClick={() => setUsername('User')}>{username}</button>
}

export default Q143
