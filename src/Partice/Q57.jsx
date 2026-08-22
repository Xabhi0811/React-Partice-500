import { useState } from 'react'

const ToggleArrayBoolean = () => {
  const [items, setItems] = useState([{ id: 1, done: false }])

  return (
    <section>
      <p>{items[0].done ? 'Done' : 'Not done'}</p>
      <button onClick={() => setItems((current) => current.map((item) => item.id === 1 ? { ...item, done: !item.done } : item))}>Toggle</button>
    </section>
  )
}

export default ToggleArrayBoolean
