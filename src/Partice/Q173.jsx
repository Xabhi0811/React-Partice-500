import { useEffect, useRef, useState } from 'react'

const usePrevious = (value) => {
  const ref = useRef()
  const [previous, setPrevious] = useState()
  useEffect(() => { setPrevious(ref.current); ref.current = value }, [value])
  return previous
}

const Q173 = () => <p>Previous: {usePrevious('current') || 'none'}</p>
export default Q173
