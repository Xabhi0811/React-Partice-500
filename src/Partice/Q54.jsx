import { useState } from 'react'

const AddArrayItem = () => {
  const [items, setItems] = useState(['Apple'])

  return (
    <section>
      <p>{items.join(', ')}</p>
      <button onClick={() => setItems((current) => [...current, 'Banana'])}>Add item</button>
    </section>
  )
}

export default AddArrayItem
