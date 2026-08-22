import { useState } from 'react'

const TwoRadioButtons = () => {
  const [choice, setChoice] = useState('red')

  return (
    <fieldset>
      <label><input type="radio" name="color" value="red" checked={choice === 'red'} onChange={(event) => setChoice(event.target.value)} /> Red</label>
      <label><input type="radio" name="color" value="blue" checked={choice === 'blue'} onChange={(event) => setChoice(event.target.value)} /> Blue</label>
    </fieldset>
  )
}

export default TwoRadioButtons
