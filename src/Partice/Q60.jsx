import { useState } from 'react'

const DeleteObjectById = () => {
  const [items, setItems] = useState([{ id: 1, name: 'First' }, { id: 2, name: 'Second' }])

  return (
    <section>
      {items.map((item) => <p key={item.id}>{item.name}</p>)}
      <button onClick={() => setItems((current) => current.filter((item) => item.id !== 1))}>Delete first</button>
    </section>
  )
}

export default DeleteObjectById
