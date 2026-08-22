import { useState } from 'react'

const ArrayState = () => {
  const [items] = useState(['Apple', 'Banana'])

  return <p>{items.join(', ')}</p>
}

export default ArrayState
