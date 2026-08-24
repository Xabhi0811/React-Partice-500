import { useEffect, useState } from "react";
export default function Q454() {
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null
  });
  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      setState({
        items: [],
        loading: true,
        error: null
      });
      fetch(`https://jsonplaceholder.typicode.com/todos?_limit=3&_page=${page}`, {
        signal: controller.signal
      }).then(response => response.json()).then(items => setState({
        items,
        loading: false,
        error: null
      })).catch(error => {
        if (error.name !== "AbortError") setState({
          items: [],
          loading: false,
          error
        });
      });
    }, 300);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [term, page]);
  return <div><input value={term} onChange={event => {
      setTerm(event.target.value);
      setPage(1);
    }} placeholder="Search list" /><button onClick={() => setPage(value => value + 1)}>More</button><output>{state.loading ? "Loading" : state.error ? "Error" : `${state.items.length} items`}</output></div>;
}
