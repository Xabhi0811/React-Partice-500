import { useState } from 'react'

const RemoveArrayItem = () => {
  const [items, setItems] = useState(['Apple', 'Banana'])

  return (
    <section>
      <p>{items.join(', ')}</p>
      <button onClick={() => setItems((current) => current.slice(0, -1))}>Remove item</button>
    </section>
  )
}

export default RemoveArrayItem
