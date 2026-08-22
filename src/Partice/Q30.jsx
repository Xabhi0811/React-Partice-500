import { useState } from 'react'

const ControlledRadio = () => {
  const [choice, setChoice] = useState('yes')

  return (
    <label>
      <input type="radio" name="single-choice" value="yes" checked={choice === 'yes'} onChange={(event) => setChoice(event.target.value)} />
      Yes
    </label>
  )
}

export default ControlledRadio
