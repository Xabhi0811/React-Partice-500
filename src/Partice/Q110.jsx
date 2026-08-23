import { useEffect, useState } from "react";

const Q110 = () => {
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("/missing.json")
      .then((response) => {
        if (!response.ok) throw Error("Request failed");
        return response.json();
      })
      .catch((reason) => setError(reason.message));
  }, []);
  return <p>{error || "No error"}</p>;
};

export default Q110;
