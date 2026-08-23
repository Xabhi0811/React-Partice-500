import { useEffect, useState } from "react";

const Q111 = () => {
  const [state, setState] = useState({ loading: true, error: "", data: [] });
  useEffect(() => {
    fetch("/people.json")
      .then((response) => {
        if (!response.ok) throw Error("Request failed");
        return response.json();
      })
      .then((data) => setState({ loading: false, error: "", data }))
      .catch((reason) =>
        setState({ loading: false, error: reason.message, data: [] }),
      );
  }, []);
  if (state.loading) return <p>Loading</p>;
  if (state.error) return <p>Error: {state.error}</p>;
  return <p>Success: {state.data.length}</p>;
};

export default Q111;
