import { useState } from 'react'

const ControlledCheckbox = () => {
  const [checked, setChecked] = useState(false)

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} />
      Accept terms
    </label>
  )
}

export default ControlledCheckbox
