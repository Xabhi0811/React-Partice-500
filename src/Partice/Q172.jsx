import { useRef, useState } from 'react'

const Q172 = () => {
  const previous = useRef('')
  const [value, setValue] = useState('one')
  const [last, setLast] = useState('')
  const change = () => { previous.current = value; setLast(previous.current); setValue('two') }
  return <button onClick={change}>Current: {value}, previous: {last}</button>
}

export default Q172
