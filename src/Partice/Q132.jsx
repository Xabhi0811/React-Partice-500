import { useEffect, useState } from 'react'

const Q132 = () => {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => console.log('Boolean changed', enabled), [enabled])
  return <button onClick={() => setEnabled((value) => !value)}>{String(enabled)}</button>
}

export default Q132
