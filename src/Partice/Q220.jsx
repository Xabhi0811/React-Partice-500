import { useEffect } from 'react'
const useDocumentTitle = (title) => useEffect(() => { document.title = title }, [title])
const Q220 = () => { useDocumentTitle('Custom title'); return <p>Title updated</p> }
export default Q220
