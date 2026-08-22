import { useState } from 'react'

const CheckboxEvent = () => {
  const [checked, setChecked] = useState(false)

  return <label><input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} /> {String(checked)}</label>
}

export default CheckboxEvent
