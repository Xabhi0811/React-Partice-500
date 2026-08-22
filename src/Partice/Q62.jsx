import { useState } from 'react'

const PreventDuplicate = () => {
  const [items, setItems] = useState(['Apple'])

  const addApple = () => setItems((current) => current.includes('Apple') ? current : [...current, 'Apple'])

  return (
    <section>
      <p>{items.join(', ')}</p>
      <button onClick={addApple}>Add Apple</button>
    </section>
  )
}

export default PreventDuplicate
