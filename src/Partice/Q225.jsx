import { useEffect, useState } from 'react'
const useFetch = (url) => { const [data, setData] = useState(null); useEffect(() => { const controller = new AbortController(); fetch(url, { signal: controller.signal }).then((response) => response.json()).then(setData).catch(() => {}); return () => controller.abort() }, [url]); return data }
const Q225 = () => <p>{useFetch('/people.json') ? 'Fetched with cleanup' : 'Loading'}</p>
export default Q225
