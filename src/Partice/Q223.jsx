import { useEffect, useState } from 'react'
const useFetch = (url) => { const [state, setState] = useState({ data: null, loading: true }); useEffect(() => { fetch(url).then((response) => response.json()).then((data) => setState({ data, loading: false })) }, [url]); return state }
const Q223 = () => { const { loading } = useFetch('/people.json'); return <p>{loading ? 'Loading' : 'Loaded'}</p> }
export default Q223
