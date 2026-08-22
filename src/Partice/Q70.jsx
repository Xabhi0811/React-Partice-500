import { useState } from 'react'

const ArrayPushFix = () => {
  const [items, setItems] = useState(['One'])

  const addItem = () => setItems((current) => [...current, 'Two'])

  return <button onClick={addItem}>{items.join(', ')}</button>
}

export default ArrayPushFix
