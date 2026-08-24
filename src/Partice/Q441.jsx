import { useEffect, useState } from "react";
export default function Q441() {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });
  useEffect(() => {
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      signal: controller.signal
    }).then(response => response.json()).then(data => setState({
      data,
      loading: false,
      error: null
    })).catch(error => {
      if (error.name !== "AbortError") setState({
        data: null,
        loading: false,
        error
      });
    });
    return () => controller.abort();
  }, []);
  return <output>{state.loading ? "Loading" : state.error ? "Error" : state.data.title}</output>;
}
