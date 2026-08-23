import { useEffect, useState } from "react";
const useResource = (url) => {
  const [state, setState] = useState({ loading: true, data: null, error: "" });
  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw Error("Request failed");
        return response.json();
      })
      .then((data) => setState({ loading: false, data, error: "" }))
      .catch((error) => {
        if (error.name !== "AbortError")
          setState({ loading: false, data: null, error: error.message });
      });
    return () => controller.abort();
  }, [url]);
  return state;
};
const Q229 = () => {
  const state = useResource("/people.json");
  if (state.loading) return <p>Loading</p>;
  if (state.error) return <p>{state.error}</p>;
  return <p>{state.data.length} records</p>;
};
export default Q229;
