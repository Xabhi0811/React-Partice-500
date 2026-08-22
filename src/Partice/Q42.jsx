import { useState } from 'react'

const ControlledTextarea = () => {
  const [text, setText] = useState('')

  return <textarea value={text} onChange={(event) => setText(event.target.value)} />
}

export default ControlledTextarea
