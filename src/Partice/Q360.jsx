import { useEffect, useState } from "react";
function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });
  useEffect(() => {
    let active = true;
    fetch(url).then(response => response.json()).then(data => active && setState({
      data,
      loading: false,
      error: null
    })).catch(error => active && setState({
      data: null,
      loading: false,
      error
    }));
    return () => {
      active = false;
    };
  }, [url]);
  return state;
}
export default function Q360() {
  const {
    data,
    loading,
    error
  } = useFetch("https://jsonplaceholder.typicode.com/todos/1");
  return <output>{loading ? "Loading..." : error ? "Error" : data.title}</output>;
}
