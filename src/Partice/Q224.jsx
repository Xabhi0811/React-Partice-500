import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [state, setState] = useState({ data: null, error: "" });
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw Error("Failed");
        return response.json();
      })
      .then((data) => setState({ data, error: "" }))
      .catch((error) => setState({ data: null, error: error.message }));
  }, [url]);
  return state;
};
const Q224 = () => {
  const { error } = useFetch("/people.json");
  return <p>{error || "No error"}</p>;
};
export default Q224;
