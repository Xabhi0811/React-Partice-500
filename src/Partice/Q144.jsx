import { useEffect, useState } from 'react'

const Q144 = () => {
  const [userId, setUserId] = useState(1)
  useEffect(() => console.log('User ID', userId), [userId])
  return <button onClick={() => setUserId((value) => value + 1)}>{userId}</button>
}

export default Q144
