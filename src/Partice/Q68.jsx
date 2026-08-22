import { useState } from 'react'

const StateDesignChoice = () => {
  const [profile, setProfile] = useState({ name: 'Abhishek', age: 18 })
  const [isOnline, setIsOnline] = useState(false)

  return (
    <section>
      <p>{profile.name}, {profile.age}, {isOnline ? 'online' : 'offline'}</p>
      <button onClick={() => setProfile((current) => ({ ...current, age: current.age + 1 }))}>Update profile</button>
      <button onClick={() => setIsOnline((current) => !current)}>Toggle status</button>
    </section>
  )
}

export default StateDesignChoice
