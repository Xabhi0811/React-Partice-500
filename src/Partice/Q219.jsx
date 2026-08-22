import { useEffect, useRef, useState } from 'react'
const usePrevious = (value) => { const ref = useRef(); const [previous, setPrevious] = useState(); useEffect(() => { setPrevious(ref.current); ref.current = value }, [value]); return previous }
const Q219 = () => <p>{usePrevious('new') || 'No previous value'}</p>
export default Q219
